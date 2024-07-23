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
                        <li className='cs-list f-col g-20 active' style={{ height: 'max-content' }}>
                            <section className='cs-l-head f-row f-justify-between f-align-center' onClick={HandleOpenList} >
                                <div className='f-row g-15 no-select f-align-center'>
                                    <span className='cs-g-logo'>
                                        <svg viewBox="-0.5 0 48 48">

                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g transform="translate(-401.000000, -860.000000)">
                                                    <g transform="translate(401.000000, 860.000000)">
                                                        <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" fill="#FBBC05">

                                                        </path>
                                                        <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" fill="#EB4335">

                                                        </path>
                                                        <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" fill="#34A853">

                                                        </path>
                                                        <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" fill="#4285F4">

                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
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
                                <div className='f-row g-15 no-select f-align-center'>
                                    <span className='cs-t-logo'>
                                        <svg viewBox="0 0 48 48" fill="none">
                                            <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white" />
                                        </svg>
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