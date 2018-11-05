import * as vscode from 'vscode';
import { MarkdownExtender } from './extendMarkdown';

export function activate(context: vscode.ExtensionContext) {
    return {
        extendMarkdownIt: MarkdownExtender.extendMarkdownIt
    };
}