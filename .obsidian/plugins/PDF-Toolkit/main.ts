import { App, Modal, Notice, Plugin, TFile, Menu } from 'obsidian';
import { exec, ExecException } from 'child_process'; // Import ExecException
import * as path from 'path';

export default class PDFToolkitPlugin extends Plugin {

    async onload() {
        this.registerEvent(
            this.app.workspace.on('file-menu', (menu: Menu, file: TFile) => {
                if (file instanceof TFile && file.extension.toLowerCase() === 'pdf') {
                    menu.addItem((item) => {
                        item
                            .setTitle("PDF Toolkit")
                            .setIcon("file-cog")
                            .onClick(() => {
                                new ToolSelectionModal(this.app, file).open();
                            });
                    });
                }
            })
        );
    }

    onunload() {}
}

class ToolSelectionModal extends Modal {
    file: TFile;

    constructor(app: App, file: TFile) {
        super(app);
        this.file = file;
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.empty();
        contentEl.addClass('pdf-toolkit-modal');

        contentEl.createEl('h2', { text: `Toolkit for: ${this.file.name}` });

        const buttonContainer = contentEl.createDiv({ cls: 'button-container' });

        // --- OCR Button ---
        const ocrButton = buttonContainer.createEl('button', { text: 'Apply OCR', cls: 'mod-cta' });
        ocrButton.addEventListener('click', () => {
            const { dir, name } = this.getPathComponents();
            const outputPath = path.join(dir, `${name}_ocr.pdf`);
            const command = `ocrmypdf "${this.getAbsolutePath()}" "${outputPath}"`;
            this.runCommand(command);
            this.close();
        });

        // --- Compress Button ---
        const compressButton = buttonContainer.createEl('button', { text: 'Compress', cls: 'mod-cta' });
        compressButton.addEventListener('click', () => {
            const { dir, name } = this.getPathComponents();
            const outputPath = path.join(dir, `${name}_comp.pdf`);
            const command = `ocrmypdf --optimize 3 --skip-text "${this.getAbsolutePath()}" "${outputPath}"`;
            this.runCommand(command);
            this.close();
        });

        // --- Extraction UI ---
        const extractionContainer = contentEl.createDiv({ cls: 'extraction-container' });
        const pagesInput = extractionContainer.createEl('input', {
            type: 'text',
            placeholder: 'e.g., 1-5,8,10'
        });
        pagesInput.id = 'page-range-input';

        const extractButton = extractionContainer.createEl('button', { text: 'Extract Pages' });
        extractButton.addEventListener('click', () => {
            const pageRange = pagesInput.value;
            if (!pageRange) {
                new Notice('Error: Page range cannot be empty.', 5000);
                return;
            }
            if (!/^[0-9,-]+$/.test(pageRange)) {
                new Notice('Error: Invalid characters in page range. Use only numbers, commas, and hyphens.', 6000);
                return;
            }

            const { dir, name } = this.getPathComponents();
            const outputPath = path.join(dir, `${name}_ext.pdf`);
            const command = `qpdf "${this.getAbsolutePath()}" --pages . ${pageRange} -- "${outputPath}"`;
            this.runCommand(command);
            this.close();
        });
    }

    getAbsolutePath(): string {
        const adapter = this.app.vault.adapter as any;
        return path.join(adapter.getBasePath(), this.file.path);
    }
    
    getPathComponents(): { dir: string, name: string } {
        const fullPath = this.getAbsolutePath();
        const dir = path.dirname(fullPath);
        const name = path.basename(fullPath, path.extname(fullPath));
        return { dir, name };
    }

    // --- THIS IS THE CORRECTED FUNCTION ---
    runCommand(command: string) {
        new Notice('PDF Toolkit: Running command...', 3000);
        
        // Add explicit types for the callback parameters
        exec(command, (error: ExecException | null, stdout: string, stderr: string) => {
            if (error) {
                console.error(`PDF Toolkit Error: ${error}`);
                new Notice(`Error: ${stderr || error.message}`, 10000);
                return;
            }
            if (stderr) {
                console.warn(`PDF Toolkit Stderr: ${stderr}`);
                new Notice(`PDF operation completed with warnings.`, 8000);
            } else {
                new Notice('PDF operation completed successfully!', 5000);
            }
            (this.app.vault as any).fileManager.rescanFiles();
        });
    }

    onClose() {
        this.contentEl.empty();
    }
}

