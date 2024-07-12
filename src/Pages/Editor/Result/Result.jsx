import { useState } from 'react'
import './Result.css'

export default function Result() {
    const [SocialState, setSocial] = useState('google');


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
                        'google'
                    ) : SocialState === 'Twitter' ? (
                        'twitter'
                    ) : SocialState === 'Facebook' ? (
                        'facebook'
                    ) : SocialState === 'Discord' ? (
                        'discord'
                    ) : SocialState === 'Linkedin' ? (
                        'linkedin'
                    ) : null
                }
            </section>
        </main>
    )
}