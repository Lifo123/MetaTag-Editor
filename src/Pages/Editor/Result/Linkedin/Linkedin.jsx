import './Linkedin.css'

export default function Linkedin({ data }) {
    const SimpleURL = `${data.URL.split('https://')}`.split('/')[0].replace(',', '');

    return (
        <main className='f-col g-20'>
            <section className='l-sec-info f-col br-6'>
                <p className='info-title pointer'>{data.Tittle || 'MetaTag Editor - Preview'}</p>
                <p className='pointer'>{SimpleURL.slice(0,40) || 'lifo123.github.io'}</p>
            </section>
            <section className='f-col'>
                <span className='l-link-img d-flex f-center pointer'>
                    {
                        data.ImgURL || <svg className='no-select' xmlns="http://www.w3.org/2000/svg" width="56" viewBox="0 0 60 60" fill="none">
                            <path d="M32.9289 7.5H22.5C17.786 7.5 15.4289 7.5 13.9645 8.96447C12.5 10.4289 12.5 12.786 12.5 17.5V42.5C12.5 47.214 12.5 49.5711 13.9645 51.0355C15.4289 52.5 17.786 52.5 22.5 52.5H37.5C42.214 52.5 44.5711 52.5 46.0355 51.0355C47.5 49.5711 47.5 47.214 47.5 42.5V22.0711C47.5 21.0492 47.5 20.5383 47.3097 20.0788C47.1194 19.6194 46.7581 19.2581 46.0355 18.5355L36.4645 8.96447C35.7419 8.24189 35.3806 7.8806 34.9212 7.6903C34.4617 7.5 33.9508 7.5 32.9289 7.5Z" stroke="#A3A8AA" strokeWidth="2" />
                            <path d="M34.6383 35.2021L26.6818 31.7922C24.7022 30.9438 22.5 32.3959 22.5 34.5496V40.4504C22.5 42.6041 24.7022 44.0562 26.6818 43.2078L34.6383 39.7979C36.6586 38.932 36.6586 36.068 34.6383 35.2021Z" stroke="#A3A8AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M32.5 7.5V17.5C32.5 19.857 32.5 21.0355 33.2322 21.7678C33.9645 22.5 35.143 22.5 37.5 22.5H47.5" stroke="#A3A8AA" strokeWidth="2" />
                        </svg>
                    }
                </span>
                <div className='l-sec-info f-col' style={{ borderRadius: '0px 0px 6px 6px' }}>
                    <p className='info-title pointer'>{data.Tittle || 'MetaTag Editor - Preview'}</p>
                    <p className='pointer'>{SimpleURL.slice(0,40) || 'lifo123.github.io'}</p>
                </div>
            </section>
        </main>
    )
}