import AbstractView from "./AbstractView.js";

export const posts = [
    { id: "v83cvw949", title: "Post 1", body: "This is post 1" },
    { id: "vwc34vw94", title: "Post 2", body: "This is post 2" },
    { id: "55ec7wgag", title: "Post 3", body: "This is post 3" }
]

export default class Posts extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        let html = "<h1>Posts</h1>";
        html += "<div style='display:flex;gap:15px'>";
        html += posts.map(post => `<div style="width:150px;border:solid 1px #777;text-align:center;"><h3>${post.title}</h3><p>${post.body}</p><a href="/posts/${post.id}">details</a></div>`).join('');
        html += "</div>";
        return html;
    }
}