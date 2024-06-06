import './Styles/Result.css'
import { useContext } from 'react'
import { GContext } from '../../Context/GlobalContext'

export default function Result() {
    const AppContext = useContext(GContext);

    return (
        <div className='result f-col px-5 py-4'>
            <h3>Preview</h3>

            <section className="r-item r-google">
                <h2>Google</h2>
                <div className="f-col g-5 me-2 mb-2 mt-3">
                    <section className='r-i-title f-col g-5 pointer'>
                        <div className='f-row g-10 f-align-center'>
                            <span className='ski'></span>
                            <div className='r-i-redirect f-col'>
                                <p>{AppContext.MetaTag.title}</p>
                                <p>{AppContext.MetaTag.url}</p>
                            </div>
                            <span className='d-flex me-1' style={{ height: '20px' }}>
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" strokeWidth={0.2}></path>
                                </svg>
                            </span>
                        </div>
                        <h3 className='mt-1'>{AppContext.MetaTag.siteName}</h3>
                    </section>
                    <span>{AppContext.MetaTag.description}</span>
                </div>
                <div className="g-sec f-col g-5 me-2 mt-3">
                    <a href={AppContext.MetaTag.url} className='f-col txt-stl-none'>
                        <h3 >{AppContext.MetaTag.title}</h3>
                        <span className='f-row g-10 f-align-center pointer'>
                            <p className='green'>{AppContext.MetaTag.url}</p>
                            <span className='triangle'></span>
                        </span>
                    </a>
                    <span>{AppContext.MetaTag.description}</span>
                </div>
            </section>

            <section className="r-item r-twitter mt-4">
                <h2>Twitter</h2>
                <div className='i-card me-2 pointer'>
                    <span className='d-flex no-select'>
                        <img height='235px' width='410px' src={AppContext.MetaTag.image} alt='Image of Brand'/>
                    </span>
                    <div className='f-col g-5'>
                        <h3 className='no-select'>{AppContext.MetaTag.siteName}</h3>
                        <p className='description no-select'>{AppContext.MetaTag.description.length > 50 ? `${AppContext.MetaTag.description.slice(0, 100)}...`: AppContext.MetaTag.description}</p>
                        <p className='no-select'>{AppContext.MetaTag.url}</p>
                    </div>
                </div>
            </section>

            <section className="r-item r-facebook mt-4">
                <h2>Facebook</h2>
                <div className='i-card me-2 pointer'>
                    <span className='d-flex no-select'>
                        <img height='260px' width='480px' src={AppContext.MetaTag.image}  alt='Image of Brand'/>
                    </span>
                    <div className='f-col g-5 no-select'>
                        <p>{AppContext.MetaTag.url}</p>
                        <h3>{AppContext.MetaTag.siteName}</h3>
                        <p className='description'>
                            {AppContext.MetaTag.description.length > 50 ? `${AppContext.MetaTag.description.slice(0, 100)}...`: AppContext.MetaTag.description}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}