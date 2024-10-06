import AbstractView from "./AbstractView.js";
import NotFound from "../NotFound.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Not Found");
        this.setScript(NotFound);
    }

    async getHtml() {
        return `
            <div class="main_container" translate="no" data-new-gr-c-s-check-loaded="14.991.0" data-gr-ext-installed="">
                <div class="content">
                    <canvas class="snow" id="snow" width="612" height="348"></canvas>
                    <div class="main_text">
                        <h2>Como você veio parar aqui?</h2>
                        <a class="home_link" href="/">Clique aqui para voltar</a>
                    </div>
                    <div class="ground">
                        <div class="mound"> 
                            <div class="mound_text">404</div>
                            <div class="mound_spade"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}