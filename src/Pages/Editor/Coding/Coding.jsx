import './Coding.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { GContext } from '../../../Context/GlobalContext';
import CodeHtml from '../GetCode/CodeHtml';

export default function Coding() {
    //Context
    const MetaData = useContext(GContext);

    //States
    const [codeState, setCodeState] = useState(false);
    const [codeMSG, setCodeMSG] = useState(null);

    const HandleOpenList = (e) => {
        const parent = e.target.parentElement;
        const height = e.target.nextElementSibling.offsetHeight;
        parent.classList.toggle('active');
        parent.style.height = parent.classList.contains('active') ? `${60 + height}px` : ``;
    };

    //Functions
    const GetCode = () => {
        let hasData = false;
        for (const section in MetaData.MetaTag) {
            for (const key in MetaData.MetaTag[section]) {
                if (MetaData.MetaTag[section][key] !== '') {
                    hasData = true;
                    break;
                }
            }
            if (hasData) break;
        }
        setCodeMSG(hasData ? null : 'Sin datos');
        setCodeState(hasData ? true : false);
    }

    const HandleManageInput = (e) => {
        const section = e.target.parentElement.getAttribute('sec');
        const key = e.target.getAttribute('val');
        const value = e.target.value;
        MetaData.ManageData(section, key, value);
        setCodeMSG(null);
    }

    return (
        <>
            <aside className='cod-side f-col relative'>
                <section className='cod-s-cont f-col g-20'>
                    <span className='w-100'>
                        <Link className='ms-title' to={'/'}>MetaTag Edit</Link>
                    </span>
                    <ul className='f-col'>
                        <li className='cs-list f-col g-20' >
                            <section className='cs-l-head f-row f-justify-between f-align-center' onClick={HandleOpenList} >
                                <div className='f-row g-15 no-select'>
                                    <span>

                                    </span>
                                    <p>OG: Tags</p>
                                </div>
                                <span className='cs-a-icon d-flex f-center no-select'>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
                                    </svg>
                                </span>
                            </section>
                            <section className='cs-l-cont f-col g-10' sec='OG'>
                                <input type="text" placeholder='OG: Site Name' onChange={HandleManageInput} val='SiteName' />
                                <input type="text" placeholder='OG: Tittle' onChange={HandleManageInput} val='Tittle' />
                                <input type="text" placeholder='OG: URL' onChange={HandleManageInput} val='URL' />
                                <textarea placeholder='OG: Description' onChange={HandleManageInput} val='Description'></textarea>
                                <input type="text" placeholder='OG: Img URL' onChange={HandleManageInput} val='ImgURL' />
                            </section>
                        </li>
                        <li className='cs-list f-col g-20'>
                            <section className='cs-l-head f-row f-justify-between f-align-center' onClick={HandleOpenList}>
                                <div className='f-row g-15 no-select'>
                                    <span>

                                    </span>
                                    <p>Twitter: Tags</p>
                                </div>
                                <span className='cs-a-icon d-flex f-center no-select'>
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
                                    </svg>
                                </span>
                            </section>
                            <section className='cs-l-cont f-col g-10' sec='Twitter'>
                                <input type="text" placeholder='Twitter: Site Name' onChange={HandleManageInput} val='SiteName' />
                                <input type="text" placeholder='Twitter: Tittle' onChange={HandleManageInput} val='Tittle' />
                                <input type="text" placeholder='Twitter: URL' onChange={HandleManageInput} val='URL' />
                                <textarea placeholder='Twitter: Description' onChange={HandleManageInput} val='Description'></textarea>
                                <input type="text" placeholder='Twitter: Img URL' onChange={HandleManageInput} val='ImgURL' />
                            </section>
                        </li>
                    </ul>
                </section>
                <section className='cod-s-footer f-col g-25 w-100'>
                    {codeMSG ? <p className='mx-auto'>{codeMSG}</p> : null}
                    <span className='btn-code br-6 pointer' onClick={GetCode}>{' <Get Code/> '}</span>
                    <label className='cs-f-links f-row f-justify-between f-align-center'>
                        <a href="">LIFO</a>
                        <span className='f-row g-10'>
                            <a href="https://github.com/Lifo123/MetaTag-Editor">Repository</a>
                            <a href="">Terms</a>
                            <a href="">Documentation</a>
                        </span>
                    </label>
                </section>
            </aside>
            {codeState ? <CodeHtml close={() => setCodeState(false)} /> : null}
        </>
    )
}