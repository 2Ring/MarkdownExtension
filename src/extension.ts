import * as vscode from 'vscode';
import { MarkdownExtender } from './extendMarkdown';
import commands from './commands';

export function activate(context: vscode.ExtensionContext) {
    for (const command in commands) {
        context.subscriptions.push(vscode.commands.registerCommand(command, commands[command]));
    }

    return {
        extendMarkdownIt: MarkdownExtender.extendMarkdownIt
    };
}