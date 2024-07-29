import './Facebook.css'

export default function Facebook({ data }) {
    //States
    const SimpleURL = `${data.URL.split('https://')}`.split('/')[0].replace(',', '');

    return (
        <main className='f-col g-20'>
            <section className='f-fot-info br-6 f-col relative'>
                <p className='pointer'>{SimpleURL || 'lifo123.github.io'}</p>
                <label className='pointer'>{`${data.Tittle.slice(0, 57)}` || 'MetaTag Editor - Preview'}{data.Tittle.length > 57 ? '...' : null}</label>
                <span className='d-flex f-center br-50 absolute pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" />
                        <path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z" />
                    </svg>
                </span>
            </section>
            <section className='f-col'>
                <span className='f-fb-img d-flex f-center pointer' >
                    {
                        data.ImgURL || <svg className='no-select' xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 60 60" fill="none">
                            <path d="M32.9289 7.5H22.5C17.786 7.5 15.4289 7.5 13.9645 8.96447C12.5 10.4289 12.5 12.786 12.5 17.5V42.5C12.5 47.214 12.5 49.5711 13.9645 51.0355C15.4289 52.5 17.786 52.5 22.5 52.5H37.5C42.214 52.5 44.5711 52.5 46.0355 51.0355C47.5 49.5711 47.5 47.214 47.5 42.5V22.0711C47.5 21.0492 47.5 20.5383 47.3097 20.0788C47.1194 19.6194 46.7581 19.2581 46.0355 18.5355L36.4645 8.96447C35.7419 8.24189 35.3806 7.8806 34.9212 7.6903C34.4617 7.5 33.9508 7.5 32.9289 7.5Z" stroke="#A3A8AA" strokeWidth="2" />
                            <path d="M34.6383 35.2021L26.6818 31.7922C24.7022 30.9438 22.5 32.3959 22.5 34.5496V40.4504C22.5 42.6041 24.7022 44.0562 26.6818 43.2078L34.6383 39.7979C36.6586 38.932 36.6586 36.068 34.6383 35.2021Z" stroke="#A3A8AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M32.5 7.5V17.5C32.5 19.857 32.5 21.0355 33.2322 21.7678C33.9645 22.5 35.143 22.5 37.5 22.5H47.5" stroke="#A3A8AA" strokeWidth="2" />
                        </svg>
                    }
                </span>
                <div className='f-fot-info f-col relative' style={{ borderRadius: '0px 0px 6px 6px' }}>
                    <p className='pointer'>{SimpleURL || 'lifo123.github.io'}</p>
                    <label className='pointer'>{`${data.Tittle.slice(0, 57)}` || 'MetaTag Editor - Preview'}{data.Tittle.length > 57 ? '...' : null}</label>
                    <p>{`${data.Description.slice(0, 134)}` || 'With Meta Tags you can edit and experiment with your content then preview how your Web...'}{data.Description.length > 134 ? '...' : null}</p>
                    <span className='d-flex f-center br-50 absolute pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75Z" />
                            <path d="M12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z" />
                        </svg>
                    </span>
                </div>
            </section>
        </main>
    )
}