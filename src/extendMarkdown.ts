export class MarkdownExtender {
    public static extendMarkdownIt = (md: any): any => {
        return md.use(require('markdown-it-anchor-2ring'), {
            level: [1, 2, 3]
        }).use(require('markdown-it-highlightjs'))
        .use(require('markdown-it-container'), 'notice')
        .use(require('markdown-it-container'), 'attention')
        .use(require('markdown-it-fontawesome'))
        .use(require('markdown-it-checkbox'))
        .use(require('markdown-it-button'));
    }
}