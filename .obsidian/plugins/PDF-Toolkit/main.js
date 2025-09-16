"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
const child_process_1 = require("child_process"); // Import ExecException
const path = require("path");
class PDFToolkitPlugin extends obsidian_1.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            this.registerEvent(this.app.workspace.on('file-menu', (menu, file) => {
                if (file instanceof obsidian_1.TFile && file.extension.toLowerCase() === 'pdf') {
                    menu.addItem((item) => {
                        item
                            .setTitle("PDF Toolkit")
                            .setIcon("file-cog")
                            .onClick(() => {
                            new ToolSelectionModal(this.app, file).open();
                        });
                    });
                }
            }));
        });
    }
    onunload() { }
}
exports.default = PDFToolkitPlugin;
class ToolSelectionModal extends obsidian_1.Modal {
    constructor(app, file) {
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
                new obsidian_1.Notice('Error: Page range cannot be empty.', 5000);
                return;
            }
            if (!/^[0-9,-]+$/.test(pageRange)) {
                new obsidian_1.Notice('Error: Invalid characters in page range. Use only numbers, commas, and hyphens.', 6000);
                return;
            }
            const { dir, name } = this.getPathComponents();
            const outputPath = path.join(dir, `${name}_ext.pdf`);
            const command = `qpdf "${this.getAbsolutePath()}" --pages . ${pageRange} -- "${outputPath}"`;
            this.runCommand(command);
            this.close();
        });
    }
    getAbsolutePath() {
        const adapter = this.app.vault.adapter;
        return path.join(adapter.getBasePath(), this.file.path);
    }
    getPathComponents() {
        const fullPath = this.getAbsolutePath();
        const dir = path.dirname(fullPath);
        const name = path.basename(fullPath, path.extname(fullPath));
        return { dir, name };
    }
    // --- THIS IS THE CORRECTED FUNCTION ---
    runCommand(command) {
        new obsidian_1.Notice('PDF Toolkit: Running command...', 3000);
        // Add explicit types for the callback parameters
        (0, child_process_1.exec)(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`PDF Toolkit Error: ${error}`);
                new obsidian_1.Notice(`Error: ${stderr || error.message}`, 10000);
                return;
            }
            if (stderr) {
                console.warn(`PDF Toolkit Stderr: ${stderr}`);
                new obsidian_1.Notice(`PDF operation completed with warnings.`, 8000);
            }
            else {
                new obsidian_1.Notice('PDF operation completed successfully!', 5000);
            }
            this.app.vault.fileManager.rescanFiles();
        });
    }
    onClose() {
        this.contentEl.empty();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBbUU7QUFDbkUsaURBQW9ELENBQUMsdUJBQXVCO0FBQzVFLDZCQUE2QjtBQUU3QixNQUFxQixnQkFBaUIsU0FBUSxpQkFBTTtJQUUxQyxNQUFNOztZQUNSLElBQUksQ0FBQyxhQUFhLENBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQVUsRUFBRSxJQUFXLEVBQUUsRUFBRTtnQkFDM0QsSUFBSSxJQUFJLFlBQVksZ0JBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRSxDQUFDO29CQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7d0JBQ2xCLElBQUk7NkJBQ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQzs2QkFDdkIsT0FBTyxDQUFDLFVBQVUsQ0FBQzs2QkFDbkIsT0FBTyxDQUFDLEdBQUcsRUFBRTs0QkFDVixJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ2xELENBQUMsQ0FBQyxDQUFDO29CQUNYLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FDTCxDQUFDO1FBQ04sQ0FBQztLQUFBO0lBRUQsUUFBUSxLQUFJLENBQUM7Q0FDaEI7QUFwQkQsbUNBb0JDO0FBRUQsTUFBTSxrQkFBbUIsU0FBUSxnQkFBSztJQUdsQyxZQUFZLEdBQVEsRUFBRSxJQUFXO1FBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNO1FBQ0YsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLElB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RCxJQUFBLG9CQUFJLEVBQUMsT0FBTyxFQUFFLENBQUMsS0FBMkIsRUFBRSxNQUFjLEVBQUUsTUFBYyxFQUFFLEVBQUU7WUFDMUUsSUFBSSxLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLENBQUMsS0FBSyxDQUFDLHNCQUFzQixLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLGlCQUFNLENBQUMsVUFBVSxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN2RCxPQUFPO1lBQ1gsQ0FBQztZQUNELElBQUksTUFBTSxFQUFFLENBQUM7Z0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxpQkFBTSxDQUFDLHdDQUF3QyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9ELENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLGlCQUFNLENBQUMsdUNBQXVDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAsIE1vZGFsLCBOb3RpY2UsIFBsdWdpbiwgVEZpbGUsIE1lbnUgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgeyBleGVjLCBFeGVjRXhjZXB0aW9uIH0gZnJvbSAnY2hpbGRfcHJvY2Vzcyc7IC8vIEltcG9ydCBFeGVjRXhjZXB0aW9uXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQREZUb29sa2l0UGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblxuICAgIGFzeW5jIG9ubG9hZCgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKCdmaWxlLW1lbnUnLCAobWVudTogTWVudSwgZmlsZTogVEZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCkgPT09ICdwZGYnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRUaXRsZShcIlBERiBUb29sa2l0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEljb24oXCJmaWxlLWNvZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRvb2xTZWxlY3Rpb25Nb2RhbCh0aGlzLmFwcCwgZmlsZSkub3BlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9udW5sb2FkKCkge31cbn1cblxuY2xhc3MgVG9vbFNlbGVjdGlvbk1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICAgIGZpbGU6IFRGaWxlO1xuXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIGZpbGU6IFRGaWxlKSB7XG4gICAgICAgIHN1cGVyKGFwcCk7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgfVxuXG4gICAgb25PcGVuKCkge1xuICAgICAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICAgICAgY29udGVudEVsLmVtcHR5KCk7XG4gICAgICAgIGNvbnRlbnRFbC5hZGRDbGFzcygncGRmLXRvb2xraXQtbW9kYWwnKTtcblxuICAgICAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiBgVG9vbGtpdCBmb3I6ICR7dGhpcy5maWxlLm5hbWV9YCB9KTtcblxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAnYnV0dG9uLWNvbnRhaW5lcicgfSk7XG5cbiAgICAgICAgLy8gLS0tIE9DUiBCdXR0b24gLS0tXG4gICAgICAgIGNvbnN0IG9jckJ1dHRvbiA9IGJ1dHRvbkNvbnRhaW5lci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnQXBwbHkgT0NSJywgY2xzOiAnbW9kLWN0YScgfSk7XG4gICAgICAgIG9jckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGlyLCBuYW1lIH0gPSB0aGlzLmdldFBhdGhDb21wb25lbnRzKCk7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGRpciwgYCR7bmFtZX1fb2NyLnBkZmApO1xuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGBvY3JteXBkZiBcIiR7dGhpcy5nZXRBYnNvbHV0ZVBhdGgoKX1cIiBcIiR7b3V0cHV0UGF0aH1cImA7XG4gICAgICAgICAgICB0aGlzLnJ1bkNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0tLSBDb21wcmVzcyBCdXR0b24gLS0tXG4gICAgICAgIGNvbnN0IGNvbXByZXNzQnV0dG9uID0gYnV0dG9uQ29udGFpbmVyLmNyZWF0ZUVsKCdidXR0b24nLCB7IHRleHQ6ICdDb21wcmVzcycsIGNsczogJ21vZC1jdGEnIH0pO1xuICAgICAgICBjb21wcmVzc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGlyLCBuYW1lIH0gPSB0aGlzLmdldFBhdGhDb21wb25lbnRzKCk7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXRQYXRoID0gcGF0aC5qb2luKGRpciwgYCR7bmFtZX1fY29tcC5wZGZgKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBgb2NybXlwZGYgLS1vcHRpbWl6ZSAzIC0tc2tpcC10ZXh0IFwiJHt0aGlzLmdldEFic29sdXRlUGF0aCgpfVwiIFwiJHtvdXRwdXRQYXRofVwiYDtcbiAgICAgICAgICAgIHRoaXMucnVuQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tIEV4dHJhY3Rpb24gVUkgLS0tXG4gICAgICAgIGNvbnN0IGV4dHJhY3Rpb25Db250YWluZXIgPSBjb250ZW50RWwuY3JlYXRlRGl2KHsgY2xzOiAnZXh0cmFjdGlvbi1jb250YWluZXInIH0pO1xuICAgICAgICBjb25zdCBwYWdlc0lucHV0ID0gZXh0cmFjdGlvbkNvbnRhaW5lci5jcmVhdGVFbCgnaW5wdXQnLCB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2UuZy4sIDEtNSw4LDEwJ1xuICAgICAgICB9KTtcbiAgICAgICAgcGFnZXNJbnB1dC5pZCA9ICdwYWdlLXJhbmdlLWlucHV0JztcblxuICAgICAgICBjb25zdCBleHRyYWN0QnV0dG9uID0gZXh0cmFjdGlvbkNvbnRhaW5lci5jcmVhdGVFbCgnYnV0dG9uJywgeyB0ZXh0OiAnRXh0cmFjdCBQYWdlcycgfSk7XG4gICAgICAgIGV4dHJhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYWdlUmFuZ2UgPSBwYWdlc0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFwYWdlUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBuZXcgTm90aWNlKCdFcnJvcjogUGFnZSByYW5nZSBjYW5ub3QgYmUgZW1wdHkuJywgNTAwMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEvXlswLTksLV0rJC8udGVzdChwYWdlUmFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgbmV3IE5vdGljZSgnRXJyb3I6IEludmFsaWQgY2hhcmFjdGVycyBpbiBwYWdlIHJhbmdlLiBVc2Ugb25seSBudW1iZXJzLCBjb21tYXMsIGFuZCBoeXBoZW5zLicsIDYwMDApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgeyBkaXIsIG5hbWUgfSA9IHRoaXMuZ2V0UGF0aENvbXBvbmVudHMoKTtcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dFBhdGggPSBwYXRoLmpvaW4oZGlyLCBgJHtuYW1lfV9leHQucGRmYCk7XG4gICAgICAgICAgICBjb25zdCBjb21tYW5kID0gYHFwZGYgXCIke3RoaXMuZ2V0QWJzb2x1dGVQYXRoKCl9XCIgLS1wYWdlcyAuICR7cGFnZVJhbmdlfSAtLSBcIiR7b3V0cHV0UGF0aH1cImA7XG4gICAgICAgICAgICB0aGlzLnJ1bkNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEFic29sdXRlUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBhZGFwdGVyID0gdGhpcy5hcHAudmF1bHQuYWRhcHRlciBhcyBhbnk7XG4gICAgICAgIHJldHVybiBwYXRoLmpvaW4oYWRhcHRlci5nZXRCYXNlUGF0aCgpLCB0aGlzLmZpbGUucGF0aCk7XG4gICAgfVxuICAgIFxuICAgIGdldFBhdGhDb21wb25lbnRzKCk6IHsgZGlyOiBzdHJpbmcsIG5hbWU6IHN0cmluZyB9IHtcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSB0aGlzLmdldEFic29sdXRlUGF0aCgpO1xuICAgICAgICBjb25zdCBkaXIgPSBwYXRoLmRpcm5hbWUoZnVsbFBhdGgpO1xuICAgICAgICBjb25zdCBuYW1lID0gcGF0aC5iYXNlbmFtZShmdWxsUGF0aCwgcGF0aC5leHRuYW1lKGZ1bGxQYXRoKSk7XG4gICAgICAgIHJldHVybiB7IGRpciwgbmFtZSB9O1xuICAgIH1cblxuICAgIC8vIC0tLSBUSElTIElTIFRIRSBDT1JSRUNURUQgRlVOQ1RJT04gLS0tXG4gICAgcnVuQ29tbWFuZChjb21tYW5kOiBzdHJpbmcpIHtcbiAgICAgICAgbmV3IE5vdGljZSgnUERGIFRvb2xraXQ6IFJ1bm5pbmcgY29tbWFuZC4uLicsIDMwMDApO1xuICAgICAgICBcbiAgICAgICAgLy8gQWRkIGV4cGxpY2l0IHR5cGVzIGZvciB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyc1xuICAgICAgICBleGVjKGNvbW1hbmQsIChlcnJvcjogRXhlY0V4Y2VwdGlvbiB8IG51bGwsIHN0ZG91dDogc3RyaW5nLCBzdGRlcnI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgUERGIFRvb2xraXQgRXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgbmV3IE5vdGljZShgRXJyb3I6ICR7c3RkZXJyIHx8IGVycm9yLm1lc3NhZ2V9YCwgMTAwMDApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGRlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFBERiBUb29sa2l0IFN0ZGVycjogJHtzdGRlcnJ9YCk7XG4gICAgICAgICAgICAgICAgbmV3IE5vdGljZShgUERGIG9wZXJhdGlvbiBjb21wbGV0ZWQgd2l0aCB3YXJuaW5ncy5gLCA4MDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3IE5vdGljZSgnUERGIG9wZXJhdGlvbiBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5IScsIDUwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKHRoaXMuYXBwLnZhdWx0IGFzIGFueSkuZmlsZU1hbmFnZXIucmVzY2FuRmlsZXMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgICB9XG59XG5cbiJdfQ==