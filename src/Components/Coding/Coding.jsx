import './Styles/Coding.css'
import { GContext } from '../../Context/GlobalContext';
import { useContext, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

export default function Coding() {
    //GlobalStates
    const AppContext = useContext(GContext);

    //States
    const [buttonText, setButtonText] = useState('Copy');
    const [CopyText, setCopyText] = useState('');

    //Functions
    const HandleTab = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const textarea = e.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            textarea.value = textarea.value.substring(0, start) + "\t" + textarea.value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
    }
    const handleTextareaChange = (e) => {
        setCopyText(e.target.value);

        const value = e.target.value;
        const parser = new DOMParser();
        const doc = parser.parseFromString(value, 'text/html');

        const title = doc.querySelector('meta[property="og:title"]')?.content;
        const description = doc.querySelector('meta[property="og:description"]')?.content;
        const url = doc.querySelector('meta[property="og:url"]')?.content;
        const image = doc.querySelector('meta[property="og:image"]')?.content;
        const siteName = doc.querySelector('meta[property="og:site_name"]')?.content;

        AppContext.setMetaTags({ title, description, url, image, siteName });
    };

    useEffect(() => {
        setCopyText(document.querySelectorAll('[txtg="vsc-sm"]')[0].defaultValue);
        if (localStorage.getItem('MetaTagEdit')) {
            let dataSaved = localStorage.getItem('MetaTagEdit');
            AppContext.setMetaTags(JSON.parse(dataSaved));
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setButtonText('Copy');
        }, 4000)
    }, [buttonText])

    return (
        <div className='Coding-sec f-col px-3 py-2'>
            <section className='f-col relative h-100 w-100 g-20'>
                <h3 className='text-center my-3'>Meta Tag Editor</h3>

                <label className='code-section html br-8 f-col'>
                    <div className='head f-row f-align-center w-100'>
                        <span className='tec-logo br-50 me-2'>
                            <img height='30px' width='30px' src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png" alt="Logo Html" />
                        </span>
                        <p>HTML</p>
                    </div>
                    <textarea className='vsc-sm br-8 p-3' txtg={'vsc-sm'} onKeyDown={HandleTab} onChange={handleTextareaChange} defaultValue={`<meta property="og:title" content="${AppContext.MetaTag.title}" />
<meta property="og:site_name" content="${AppContext.MetaTag.siteName}" />
<meta property="og:description" content="${AppContext.MetaTag.description}" />
<meta property="og:url" content="${AppContext.MetaTag.url}" />
<meta property="og:image" content="${AppContext.MetaTag.image}" />`} spellCheck='false'></textarea>
                </label>

                <CopyToClipboard text={CopyText} onCopy={(e) => setButtonText('Copied')}>
                    <span className='btn btn-primary relative d-flex br-6'>{buttonText}</span>
                </CopyToClipboard>
                <footer className='cod-fot f-row absolute f-align-center f-justify-between w-100 g-10'>
                    <a href='https://github.com/Lifo123' target='_blank'>Lifo123</a>
                    <div className='f-row g-10'>
                        <a href='https://github.com/Lifo123/MetaTag-Editor' target='_blank'>Repository</a>
                        <Link to={'/Test'}>Documentation</Link>
                        <Link to={'/Test'} >Terms</Link>
                        <Link to={'/Test'} >Settings</Link>
                    </div>
                </footer>
            </section>
        </div>
    )
}