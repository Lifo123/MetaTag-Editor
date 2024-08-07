import { useState } from 'react'
import './Discord.css'

export default function Discord({ data }) {
    //States
    const [DarkModeDC, setDarkModeDC] = useState(true);
    

    return (
        <main className={`f-col g-10 relative ${DarkModeDC ? 'dark' : 'light'}`}>
            <span className='absolute togle-ds pointer' onClick={() => setDarkModeDC((v) => !v)}>
                <svg className='no-select' xmlns="http://www.w3.org/2000/svg" viewBox="-5.5 0 32 32" version="1.1">
                    <path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z" />
                </svg>
            </span>
            <div className='f-ds-sec f-col g-20 br-10'>
                <section className='f-ds-info f-col' style={{ width: '400px' }}>
                    <span className='pointer'>{data.SiteName || 'MetaTag-Editor'}</span>
                    <label className='pointer'>{`${data.Tittle.slice(0, 36)}` || 'MetaTag Editor - Preview'}{data.Tittle.length > 36 ? '...' : null}</label>
                    <p>{`${data.Description.slice(0, 97)}` || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look...'}{data.Description.length > 97 ? '...' : null}</p>
                </section>
                <section className='f-ds-info f-col'>
                    <span className='pointer'>{data.SiteName || 'MetaTag-Editor'}</span>
                    <label className='pointer'>{`${data.Tittle.slice(0, 44)}` || 'MetaTag Editor - Preview'}{data.Tittle.length > 44 ? '...' : null}</label>
                    <p>{`${data.Description.slice(0, 117)}` || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look...'}{data.Description.length > 117 ? '...' : null}</p>
                    <div className='ds-img d-flex br-6 f-center pointer'>
                        {
                            data.ImgURL || <svg className='no-select' xmlns="http://www.w3.org/2000/svg" width="50" viewBox="0 0 60 60" fill="none">
                                <path d="M32.9289 7.5H22.5C17.786 7.5 15.4289 7.5 13.9645 8.96447C12.5 10.4289 12.5 12.786 12.5 17.5V42.5C12.5 47.214 12.5 49.5711 13.9645 51.0355C15.4289 52.5 17.786 52.5 22.5 52.5H37.5C42.214 52.5 44.5711 52.5 46.0355 51.0355C47.5 49.5711 47.5 47.214 47.5 42.5V22.0711C47.5 21.0492 47.5 20.5383 47.3097 20.0788C47.1194 19.6194 46.7581 19.2581 46.0355 18.5355L36.4645 8.96447C35.7419 8.24189 35.3806 7.8806 34.9212 7.6903C34.4617 7.5 33.9508 7.5 32.9289 7.5Z" strokeWidth="2" />
                                <path d="M34.6383 35.2021L26.6818 31.7922C24.7022 30.9438 22.5 32.3959 22.5 34.5496V40.4504C22.5 42.6041 24.7022 44.0562 26.6818 43.2078L34.6383 39.7979C36.6586 38.932 36.6586 36.068 34.6383 35.2021Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M32.5 7.5V17.5C32.5 19.857 32.5 21.0355 33.2322 21.7678C33.9645 22.5 35.143 22.5 37.5 22.5H47.5" strokeWidth="2" />
                            </svg>
                        }
                    </div>
                </section>
            </div>
        </main>
    )
}