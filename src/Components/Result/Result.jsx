import './Styles/Result.css'
import { useContext, useEffect, useState } from 'react'
import { GContext } from '../../Context/GlobalContext'

export default function Result() {
    //GlobalStates
    const AppContext = useContext(GContext);

    //States
    const [ResultHeight, setResultH] = useState(0);

    useEffect(() => {
        setResultH(document.querySelector('.result > .px-5').offsetHeight + document.querySelector('.result > .r-srch').offsetHeight + 85   );
    }, [])

    return (
        <>
            <section className='pop-icons absolute w-100 no-select' style={{height: `${ResultHeight}px`}}>
                <div className='d-flex sticky w-100'>
                    <span className='stgs-icon d-flex absolute f-center pointer' onClick={(e) => e.currentTarget.classList.toggle('active')}>
                        <svg height="30px" viewBox="0 -960 960 960" fill="#5f6368"><path d="M409-64q-14 0-24.95-8.71Q373.09-81.42 371-96l-15-98q-16-6-35.28-16.95Q301.44-221.91 287-233l-90 41q-14 7-28.5 2T147-208L77-335q-7-12-4.5-25.5T88-383l82-62q-1-6.93-1.5-18t-.5-19q0-7.41.5-17.5T170-518l-82-60q-12-9-15-22.5t5-26.5l70-126q7-12 21-16.5t28 .5l88 41q14-11 34-22.5t37-17.5l15-98q2-14 13-22.5t25-8.5h142q14 0 25 8.5t13 22.5l15 98q17 6 37.5 17.5T675-728l88-41q13.72-6 27.44-1T812-753l71 126q7 13 4 27t-15 22l-83 59q1 9 2 20t1 19q0 8-1 18.5t-1 18.5l82 60q12 8 15 22t-4 27l-70 126q-7 13-21.33 18-14.34 5-28.67-2l-90-41q-14 11-33 22.5T605-194l-16 98q-2.09 14.58-13.05 23.29Q565-64 551-64H409Zm27-73h87.85L538-250q34-8 63.91-25.08Q631.83-292.17 657-317l105 46 40-72-93-69q4-17 7-34.23 3-17.23 3-34.5 0-18.27-2.5-34.77Q714-532 710-550l92-68-39-72-106 45q-23-26-52.89-44.29-29.9-18.3-66.11-23.71l-13-111h-90l-13 111q-36 8-66.5 25.5T302-645l-104-45-41 72 93 69q-4 18-6.5 34.5t-2.5 32.92q0 16.58 2.5 33.58t6.5 36l-93 69 41 72 105-46q26 26 56 43t63 25l14 112Zm43-200q59.6 0 101.8-42.2Q623-421.4 623-481q0-59.6-42.2-101.8Q538.6-625 479-625q-60 0-102 42.2T335-481q0 59.6 42 101.8Q419-337 479-337Zm1-144Z" /></svg>
                    </span>
                </div>
            </section>
            <div className='result f-col relative py-3 px-4'>
                <section className='r-srch f-row mb-4 w-100 f-justify-between'>
                    <div className='r-srch-in f-row g-35 f-align-center'>
                        <span className='d-flex pointer'>
                            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" style={{ background: "none" }} alt="Google" height="30" width="92" />
                        </span>
                        <label className='f-row relative mx-auto f-align-center'>
                            <span className='s-m-s d-flex absolute pointer'>
                                <svg className='no-select' height="26px" viewBox="0 0 24 24" fill="#999b9f"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                            </span>
                            <div className='s-ma-cm f-row absolute g-5'>
                                <span className='d-flex pointer'>
                                    <svg className='no-select' height='36px' version="1.1" viewBox="0 0 150 150" >
                                        <g>
                                            <g id="g17480" transform="translate(646.3034,236.3789)">
                                                <path className="st6" d="M-571.3-147.3c7.9,0,14.2-6.4,14.2-14.2l0-33.2c0-7.9-6.4-14.2-14.2-14.2    c-7.9,0-14.2,6.4-14.2,14.2v33.2C-585.5-153.7-579.1-147.3-571.3-147.3" id="path17482" /></g><g id="g17484" transform="translate(645.4803,233.1492)">
                                                <path className="st5" d="M-575.2-125.5L-575.2-125.5v14.9h9.5v-14.8c-1.5,0.2-3.1,0.2-4.7,0.2    C-572.1-125.1-573.6-125.2-575.2-125.5" id="path17486" /></g><g id="g17488" transform="translate(643.3809,235.9115)">
                                                <path className="st9" d="M-585.2-144.1c-4.2-4.3-6.9-9.5-6.9-16.6h-9.5c0,9.5,3.7,17.3,9.7,23.3l0.1-0.1    c0,0,0,0-0.1-0.1L-585.2-144.1z" id="path17490" /></g><g id="g17492" transform="translate(650.4081,238.79)">
                                                <path className="st7" d="M-551.7-163.6c0,11.9-10.5,23.6-23.7,23.6c-6.6,0-12.5-2.7-16.8-7l-0.1,0.1l-6.6,6.6    c0,0,0,0,0.1,0.1c4.9,4.9,11.4,8.2,18.7,9.3c1.6,0.2,3.2,0.4,4.8,0.4c1.6,0,3.2,0,4.7-0.2c16.1-2.3,28.4-16.1,28.4-32.7H-551.7z" id="path17494" />
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <span className='d-flex pointer'>
                                    <svg className='no-select' height='36px' version="1.1" viewBox="0 0 150 150" >
                                        <g>
                                            <path className="st9" d="M94.3,43.6c6.6,0,12.1,5.4,12.1,12.1v9.7h12.1v-9.7c0-13.3-10.8-24.2-24.2-24.2h-9.7v12.1H94.3z" />
                                            <path className="st7" d="M43.6,55.7c0-6.6,5.4-12.1,12.1-12.1h9.7V31.5h-9.7c-13.3,0-24.2,10.8-24.2,24.2v9.7h12.1V55.7z" />
                                            <path className="st0" d="M55.7,106.4c-6.6,0-12.1-5.4-12.1-12.1v-9.7H31.5v9.7c0,13.3,10.8,24.2,24.2,24.2h9.7v-12.1L55.7,106.4   L55.7,106.4z" />
                                            <circle className="st6" cx="75" cy="75" id="XMLID_3_" r="16.9" />
                                            <g>
                                                <circle className="st5" cx="104" cy="104" r="9.7" />
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                            <input className='br-max' type="text" placeholder='Search URL' name='url' />
                        </label>
                    </div>
                    <button className='g-blue-btn br-6 pointer'>Fetch</button>
                </section>

                <div className='px-5'>
                    <h3>Preview</h3>

                    <section className="r-item r-google mt-3">
                        <h2>Google</h2>
                        <div className="f-col g-5 me-2 mb-2 mt-3">
                            <a className='r-i-title f-col g-5 pointer' href={AppContext.MetaTag.url} target='_blank'>
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
                            </a>
                            <span>{AppContext.MetaTag.description}</span>
                        </div>
                        <div className="g-sec f-col g-5 me-2 mt-3">
                            <a href={AppContext.MetaTag.url} className='f-col' target='_blank'>
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
                                <img height='235px' width='410px' src={AppContext.MetaTag.image || "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/how-to-join-a-fortnite-tournament.jpg"} alt='Image of Brand' />
                            </span>
                            <div className='f-col g-5'>
                                <h3 className='no-select'>{AppContext.MetaTag.siteName}</h3>
                                <p className='description no-select'>{AppContext.MetaTag.description.length > 50 ? `${AppContext.MetaTag.description.slice(0, 100)}...` : AppContext.MetaTag.description}</p>
                                <p className='no-select'>{AppContext.MetaTag.url}</p>
                            </div>
                        </div>
                    </section>

                    <section className="r-item r-facebook mt-4">
                        <h2>Facebook</h2>
                        <div className='i-card me-2 pointer'>
                            <span className='d-flex no-select'>
                                <img height='260px' width='480px' src={AppContext.MetaTag.image || "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/how-to-join-a-fortnite-tournament.jpg"} alt='Image of Brand' />
                            </span>
                            <div className='f-col g-5 no-select'>
                                <p>{AppContext.MetaTag.url}</p>
                                <h3>{AppContext.MetaTag.siteName}</h3>
                                <p className='description'>
                                    {AppContext.MetaTag.description.length > 50 ? `${AppContext.MetaTag.description.slice(0, 100)}...` : AppContext.MetaTag.description}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}