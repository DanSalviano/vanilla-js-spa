import AbstractView from "./AbstractView.js";
import { posts } from "./Posts.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.params = params;
        this.setTitle("Post Details");
    }


    async getHtml() {
        let post = posts.find(p => p.id == this.params.id);
        return `
            <h1>Post</h1>
            <p>You are viewing post <b>#${post.id}</b>.</p>
            <p><b>${post.title}</b>.</p>
            <p>${post.body}.</p>
        `;
    }
}
