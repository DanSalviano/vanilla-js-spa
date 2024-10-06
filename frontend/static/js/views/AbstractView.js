export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = 'Vanilla JS SPA | ' + title;
    }

    setScript(script) {
        this.jsscript = script
    }

    async getHtml() {
        return "";
    }

    async runScript() {
        if (typeof this.jsscript == 'function') {
            this.jsscript();
        }
    }
}