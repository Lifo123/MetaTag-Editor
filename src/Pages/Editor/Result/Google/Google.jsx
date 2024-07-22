import './Google.css'

export default function Google({ data }) {

    return (
        <main className='r-google f-col g-20'>
            <section className='r-google-first f-col'>
                <div className='f-col f-align-start'>
                    <a className='g-title pointer'>{data.SiteName || 'MetaTag-Editor'}</a>
                    <a className='g-link pointer'>{data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}</a>
                </div>
                <p className='g-desc'>{`${data.Description.slice(0, 184)}` || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'}{data.Description.length >= 184 ? '...' : null}</p>
            </section>

            <section className='r-google-sec f-col'>
                <label className='f-row f-align-center g-10'>
                    <span className='rgs-logo pointer'>
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
                    <a className='f-col pointer'>
                        <p className='gs-title'>{data.SiteName || 'MetaTag-Editor'}</p>
                        <p className='gs-link'>{data.URL || 'https://Lifo123.github.io/MetaTag...'}</p>
                    </a>
                    <span className='d-flex f-center rgs-logo pointer'>
                        <svg className='no-select' viewBox="0 0 24 24" fill="none">
                            <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z" stroke="#88898B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#88898B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z" stroke="#88898B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </label>
                <p className='g-title mt-10 pointer'>{data.Tittle || 'MetaTags Editor - Preview'}</p>
                <p className='g-desc'>{`${data.Description.slice(0, 184)}` || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'}{data.Description.length >= 184 ? '...' : null}</p>
            </section>
        </main>
    )
}