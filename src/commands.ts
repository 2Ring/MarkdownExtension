import * as vscode from 'vscode';

function convertTextToListLabel(text: string) {
    const transformedText = text.replace(/(\*)|(^[\s*]*-)|(-[\s*]*$)/g, '').trim();

    return `- ^${transformedText}:list-label^`;
}

function convertTextToAnnotation(text: string) {
    const transformedText = text.replace(/(^[> \t]*Figure \d+:\s*)/g, '').trim();

    return `^${transformedText}:annotation^`;
}

function convertTextToLink(text: string) {
    const transformedText = text.replace(/\*/g, '').trim();

    return `^${transformedText}:link^`;
}

function transformSelections(transformFunction: (text: string) => string) {
    return () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || !transformFunction) {
            return;
        }

        editor.edit((editBuilder) => {
            editor.selections.forEach((selection) => {
                editBuilder.replace(selection, transformFunction(editor.document.getText(selection)));
            });
        }).then(() => {
            editor.selections = editor.selections.map((selection) => {
                return new vscode.Selection(selection.end, selection.end);
            });
        });
    };
}

const commandFunctions: { [func: string]: () => void } = {
    '2r_md.listLabel': transformSelections(convertTextToListLabel),
    '2r_md.annotation': transformSelections(convertTextToAnnotation),
    '2r_md.link': transformSelections(convertTextToLink)
};

export default commandFunctions;