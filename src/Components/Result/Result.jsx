

export default function Result() {
    return (
        <section className="f-col result-sec h-100 ">
            <div class="index-preview__slide">
                <header class="index-preview__header">
                    <h3>Preview</h3>
                </header>
                <div class="index-metadata__content">
                    <div id="google" class="metadata-group__display is-active">
                        <h4 class="metadata-group__title"><span>Google</span></h4>
                        <div class="card-seo-google">
                            <span class="card-seo-google__title js-preview-title">Manage Tournaments</span>
                            <div class="card-seo-google__url"><span class="card-seo-google__url-title js-preview-domain">https://lifo123.github.io/ManageTournaments/</span>
                                <span class="card-seo-google__url-arrow"></span>
                            </div>
                            <span class="card-seo-google__description js-preview-description">Manage Tournamentes complety 'FREE' in our website without any cost</span>
                        </div>
                    </div>
                </div>
                <code class="!whitespace-pre hljs language-json">
                    <span class="hljs-punctuation">{'{'}</span>
                    <span class="hljs-attr">"scripts"</span>
                    <span class="hljs-punctuation">:</span>
                    <span class="hljs-punctuation">{'{'}</span>
                    <span class="hljs-attr">"build"</span>
                    <span class="hljs-punctuation">:</span>
                    <span class="hljs-string">"vite build"</span>
                    <span class="hljs-punctuation">,</span>
                    <span class="hljs-attr">"predeploy"</span>
                    <span class="hljs-punctuation">:</span>
                    <span class="hljs-string">"npm run build"</span>
                    <span class="hljs-punctuation">,</span>
                    <span class="hljs-attr">"deploy"</span>
                    <span class="hljs-punctuation">:</span>
                    <span class="hljs-string">"gh-pages -d build"</span>
                    <span class="hljs-punctuation">{'}'}</span>
                    <span class="hljs-punctuation">{'}'}</span>
                </code>
            </div>
        </section>
    )
}