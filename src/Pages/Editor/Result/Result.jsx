import './Result.css'
import { lazy, useState } from 'react'
import SuspenseWrapper from '../../../Components/SuspenseWrapper/SuspenseWrapper'

const Google = lazy(() => import('./Google/Google'));
const Twitter = lazy(() => import('./Twitter/Twitter'));
const Facebook = lazy(() => import('./Facebook/Facebook'));
const Discord = lazy(() => import('./Discord/Discord'));
const Linkedin = lazy(() => import('./Linkedin/Linkedin'));

export default function Result() {
    const [SocialState, setSocial] = useState('Google');


    return (
        <main className='res-side f-col'>
            <section className='rs-header f-col f-align-center f-justify-center g-35'>
                <h2 className='rs-title'>Social Media Preview</h2>
                <ul className='f-row g-20'>
                    <li className='rs-h-social br-50 pointer' onClick={() => setSocial('Google')}><span className='no-select'></span></li>
                    <li className='rs-h-social br-50 pointer' onClick={() => setSocial('Twitter')}><span className='no-select'></span></li>
                    <li className='rs-h-social br-50 pointer' onClick={() => setSocial('Facebook')}><span className='no-select'></span></li>
                    <li className='rs-h-social br-50 pointer' onClick={() => setSocial('Discord')}><span className='no-select'></span></li>
                    <li className='rs-h-social br-50 pointer' onClick={() => setSocial('Linkedin')}><span className='no-select'></span></li>
                </ul>
            </section>
            <section className='rs-main f-col'  >
                <p className='rs-subtitle'>Preview in {SocialState}</p>
                {
                    SocialState === 'Google' ? (
                        <SuspenseWrapper element={<Google />} />
                    ) : SocialState === 'Twitter' ? (
                        <SuspenseWrapper element={<Twitter />} />
                    ) : SocialState === 'Facebook' ? (
                        <SuspenseWrapper element={<Facebook />} />
                    ) : SocialState === 'Discord' ? (
                        <SuspenseWrapper element={<Discord />} />
                    ) : SocialState === 'Linkedin' ? (
                        <SuspenseWrapper element={<Linkedin />} />
                    ) : null
                }
            </section>
        </main>
    )
}