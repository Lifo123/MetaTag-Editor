import './Styles/Index.css'
import { useContext, useEffect, useRef } from 'react'
import { GContext } from '../../Context/GlobalContext'

import Coding from '../../Components/Coding/Coding'
import Result from '../../Components/Result/Result'


export default function Index({ setProgress }) {
    // Global States
    const AppContext = useContext(GContext);

    //Refs
    const Separator = useRef();

    // Functions
    const HandleMouseDown = (e) => {
        Separator.current.classList.add('active');
        document.addEventListener("mousemove", HandleResize);
        document.addEventListener("mouseup", HandleClear);
    }

    const HandleResize = (e) => {
        const leftWidth = Math.max(Math.min(e.clientX, e.view.innerWidth - 1), 3);
        const rightWidth = e.view.innerWidth - e.clientX;

        Separator.current.previousSibling.style.width = `${leftWidth}px`;
        Separator.current.nextSibling.style.width = `${rightWidth}px`;
        Separator.current.style.left = `${leftWidth}px`;

    }


    const HandleClear = () => {
        Separator.current.classList.remove('active');
        document.removeEventListener("mousemove", HandleResize);
        document.removeEventListener("mouseup", HandleClear);
    }

    // Effects
    useEffect(() => {
        setProgress(30);
        setTimeout(() => {
            setProgress(100);
        }, 200);
    }, [setProgress]);

    return (
        <main className='app-render fixed h-100 w-100'>
            <section className='code d-flex relative h-100 pe-1'>
                <div className='f-col p-2'>
                    <h3>URL</h3>
                    <input className='w-60' type="text" placeholder='Search' />
                    <textarea name=""></textarea>
                </div>
            </section>

            <span className='resizer-l absolute' onMouseDown={HandleMouseDown} ref={Separator}></span>

            <section className='view d-grid '>
                <div className='f-col p-3 g-20'>
                    <h3>Preview</h3>
                    <div className="index-metadata__content">
                        <div className="metadata-group__display is-active">
                            <h4 className="metadata-group__title"><span>Google</span></h4>
                            <div className="card-seo-google">
                                <span className="card-seo-google__title js-preview-title">Manage Tournaments</span>
                                <div className="card-seo-google__url"><span className="card-seo-google__url-title js-preview-domain">https://lifo123.github.io/ManageTournaments/</span>
                                    <span className="card-seo-google__url-arrow"></span>
                                </div>
                                <span className="card-seo-google__description js-preview-description">Manage Tournamentes complety 'FREE' in our website without any cost</span>
                            </div>
                        </div>
                    </div>
                    <div className="index-metadata__content">
                        <div className="metadata-group__display is-active">
                            <h4 className="metadata-group__title"><span>Twitter</span></h4>
                            <div className="card-seo-google">
                                <span className="card-seo-google__title js-preview-title">Manage Tournaments</span>
                                <div className="card-seo-google__url"><span className="card-seo-google__url-title js-preview-domain">https://lifo123.github.io/ManageTournaments/</span>
                                    <span className="card-seo-google__url-arrow"></span>
                                </div>
                                <span className="card-seo-google__description js-preview-description">Manage Tournamentes complety 'FREE' in our website without any cost</span>
                            </div>
                        </div>
                    </div>
                    <div className="index-metadata__content">
                        <div className="metadata-group__display is-active">
                            <h4 className="metadata-group__title"><span>Facebook</span></h4>
                            <div className="card-seo-google">
                                <span className="card-seo-google__title js-preview-title">Manage Tournaments</span>
                                <div className="card-seo-google__url"><span className="card-seo-google__url-title js-preview-domain">https://lifo123.github.io/ManageTournaments/</span>
                                    <span className="card-seo-google__url-arrow"></span>
                                </div>
                                <span className="card-seo-google__description js-preview-description">Manage Tournamentes complety 'FREE' in our website without any cost</span>
                            </div>
                        </div>
                    </div>
                    <div className="index-metadata__content">
                        <div className="metadata-group__display is-active">
                            <h4 className="metadata-group__title"><span>Linkedin</span></h4>
                            <div className="card-seo-google">
                                <span className="card-seo-google__title js-preview-title">Manage Tournaments</span>
                                <div className="card-seo-google__url"><span className="card-seo-google__url-title js-preview-domain">https://lifo123.github.io/ManageTournaments/</span>
                                    <span className="card-seo-google__url-arrow"></span>
                                </div>
                                <span className="card-seo-google__description js-preview-description">Manage Tournamentes complety 'FREE' in our website without any cost</span>
                            </div>
                        </div>
                    </div>
                    <div className="index-metadata__content">
                        <div className="metadata-group__display is-active">
                            <h4 className="metadata-group__title"><span>Discord</span></h4>
                            <div className="card-seo-google">
                                <span className="card-seo-google__title js-preview-title">Manage Tournaments</span>
                                <div className="card-seo-google__url"><span className="card-seo-google__url-title js-preview-domain">https://lifo123.github.io/ManageTournaments/</span>
                                    <span className="card-seo-google__url-arrow"></span>
                                </div>
                                <span className="card-seo-google__description js-preview-description">Manage Tournamentes complety 'FREE' in our website without any cost</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
