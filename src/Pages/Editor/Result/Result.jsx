import './Result.css'
import { lazy, useContext, useState } from 'react'
import SuspenseWrapper from '../../../Components/SuspenseWrapper/SuspenseWrapper'
import { GContext } from '../../../Context/GlobalContext';

const Google = lazy(() => import('./Google/Google'));
const Twitter = lazy(() => import('./Twitter/Twitter'));
const Facebook = lazy(() => import('./Facebook/Facebook'));
const Discord = lazy(() => import('./Discord/Discord'));
const Linkedin = lazy(() => import('./Linkedin/Linkedin'));

const Logo = {
    google: <svg viewBox="-0.5 0 48 48">

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
    </svg>,
    twitter: <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
        <path fillRule="evenodd" clipRule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white" />
    </svg>,
    facebook: <svg viewBox="0 0 16 16" fill="none"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z" /><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z" /></svg>,
    discord: <svg viewBox="0 0 1024 1024">
        <circle cx="512" cy="512" r="512" fill='#5865f2' />
        <path d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z" fill='#fff' />
    </svg>,
    linkedin: <svg viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1" />
        <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white" />
        <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white" />
        <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white" />
    </svg>
}

export default function Result() {
    //Context
    const MetaData = useContext(GContext);

    const [SocialState, setSocial] = useState('Google');


    return (
        <main className='res-side f-col'>
            <section className='rs-header f-col f-align-center f-justify-center g-35'>
                <h2 className='rs-title'>Social Media Preview</h2>
                <ul className='f-row g-25'>
                    <li className='rs-h-social google br-50 pointer' onClick={() => setSocial('Google')}><span className='google d-flex h-100 w-100 no-select'>{Logo.google}</span></li>
                    <li className='rs-h-social facebook br-50 pointer' onClick={() => setSocial('Facebook')}><span className='facebook d-flex h-100 w-100 no-select'>{Logo.facebook}</span></li>
                    <li className='rs-h-social discord br-50 pointer' onClick={() => setSocial('Discord')}><span className='discord d-flex h-100 w-100 no-select'>{Logo.discord}</span></li>
                    <li className='rs-h-social linkedin br-50 pointer' onClick={() => setSocial('Linkedin')}><span className='linkedin d-flex h-100 w-100 no-select'>{Logo.linkedin}</span></li>
                    <li className='rs-h-social twitter br-50 pointer' onClick={() => setSocial('Twitter')}><span className='twitter d-flex h-100 w-100 no-select'>{Logo.twitter}</span></li>
                </ul>
            </section>
            <section className='rs-main f-col g-20'  >
                <p className='rs-subtitle'>{SocialState} Preview</p>
                {
                    SocialState === 'Google' ? (
                        <SuspenseWrapper element={<Google data={MetaData.MetaTag.OG}/>} />
                    ) : SocialState === 'Twitter' ? (
                        <SuspenseWrapper element={<Twitter data={MetaData.MetaTag.Twitter}/>} />
                    ) : SocialState === 'Facebook' ? (
                        <SuspenseWrapper element={<Facebook data={MetaData.MetaTag.OG}/>} />
                    ) : SocialState === 'Discord' ? (
                        <SuspenseWrapper element={<Discord data={MetaData.MetaTag.OG}/>} />
                    ) : SocialState === 'Linkedin' ? (
                        <SuspenseWrapper element={<Linkedin data={MetaData.MetaTag.OG}/>} />
                    ) : null
                }
            </section>
            
        </main>
    )
}