import { workspace } from 'vscode';

export class MarkdownExtender {
    public static extendMarkdownIt = (md: any): any => {
        const containerOptions = {
            validate: (params: string) => {
                return params.trim().match(/^(\w+ ?)+$/);
            },
            render: (tokens: Array<any>, idx: number) => {
                const classes = tokens[idx].info.trim().match(/^(\w+ ?)+$/);

                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return `<div class="${md.utils.escapeHtml(classes[0])}">`;
                } else {
                    // closing tag
                    return '</div>\n';
                }
            }
        };

        return md.use(require('markdown-it-anchor-2ring'), {
            level: [1, 2, 3],
            tocLevel: workspace.getConfiguration('2r_md').tocLevel
        }).use(require('markdown-it-highlightjs'))
        .use(require('markdown-it-container'), 'container', containerOptions)
        .use(require('markdown-it-fontawesome'))
        .use(require('markdown-it-checkbox'))
        .use(require('markdown-it-button'));
    }
}