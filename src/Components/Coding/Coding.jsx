import { useEffect, useState } from 'react'
import './Styles/Coding.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Helmet } from 'react-helmet-async';

export default function Coding() {
    //States
    const [CopyText, setCopyText] = useState('');

    //Functions
    const HandleTab = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const textarea = e.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            // Set textarea value to: text before caret + tab + text after caret
            textarea.value = textarea.value.substring(0, start) + "\t" + textarea.value.substring(end);

            // Put caret at right position again
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
    }
    const handleTextareaChange = (e) => {
        setCopyText(e.target.value);
    };

    useEffect(() => {
        setCopyText(document.querySelectorAll('[txtg="vsc-sm"]')[0].defaultValue)
    }, [])

    return (
        <div className='Coding-sec f-col p-3'>
            <Helmet>
                <meta property="p:title" content="Manage Tournaments" />
                <meta property="p:description" content="Manage Tournamentes complety 'FREE' in our website without any cost" />
                <meta property="p:url" content="https://Lifo123.github.io/ManageTournaments/" />
                <meta property="p:site_name" content="Manage Tournaments" />
                <meta property="p:type" content="website" />
            </Helmet>
            <section className='f-col w-100 g-20'>
                <h3 className='m-auto'>Easy Meta Tag Edit</h3>

                <blockquote className='code-section html br-8 f-col'>
                    <div className='head f-row f-align-center w-100'>
                        <span className='tec-logo br-50 me-2'>
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png" alt="" />
                        </span>
                        <p>HTML</p>
                    </div>
                    <textarea className='vsc-sm br-8 p-3' txtg={'vsc-sm'} onKeyDown={HandleTab} onChange={handleTextareaChange} defaultValue={`<meta property="og:title" content="Manage Tournaments" />
<meta property="og:description" content="Manage Tournamentes complety 'FREE' in our website without any cost" />
<meta property="og:url" content="https://Lifo123.github.io/ManageTournaments/" />
<meta property="og:site_name" content="Manage Tournaments" />`}></textarea>
                </blockquote>

                    <CopyToClipboard text={CopyText} onCopy={(e) => e.target.innerText = 'Copied'}>
                        <span className='btn btn-primary relative d-flex f-align-self-end br-6'>Copiar</span>
                    </CopyToClipboard>
            </section>
        </div>
    )
}

document.querySelectorAll('vsc-sm').value;