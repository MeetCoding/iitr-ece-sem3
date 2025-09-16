import { Plugin, TFile } from 'obsidian';
interface GhostWriterSettings {
    geminiAPIKey: string;
}
export default class GhostWriterPlugin extends Plugin {
    settings: GhostWriterSettings;
    referenceFiles: TFile[];
    prompts: string[];
    onload(): Promise<void>;
    loadSettings(): Promise<void>;
    saveSettings(): Promise<void>;
    loadPrompts(): Promise<void>;
}
export {};
//# sourceMappingURL=main.d.ts.map