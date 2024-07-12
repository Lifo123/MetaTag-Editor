import './Coding.css'

export default function Coding() {

    const HandleOpenList = () => {
        console.log('esete');
    }

    return (
        <aside className='cod-side f-col relative'>
            <section className='f-col g-30'>
                <h4 className='ms-title'>MetaTag Edit</h4>
                <ul className='f-col'>
                    <li className='cs-list f-col br-4' onClick={HandleOpenList}>
                        <section className='f-row f-justify-between f-align-center'>
                            <div className='f-row g-15'>
                                <span>

                                </span>
                                <p>OG:Tags</p>
                            </div>
                            <span className='cs-a-icon d-flex f-center'>
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
                                </svg>
                            </span>
                        </section>
                    </li>
                    <li className='cs-list f-col br-4' onClick={HandleOpenList}>
                        <section className='f-row f-justify-between f-align-center'>
                            <div className='f-row g-15'>
                                <span>

                                </span>
                                <p>Twitter:Tags</p>
                            </div>
                            <span className='cs-a-icon d-flex f-center'>
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" />
                                </svg>
                            </span>
                        </section>
                    </li>
                </ul>
            </section>
            <section className='cod-s-footer f-col g-25 absolute'>
                <span className='btn-code br-6 pointer'>{' <Get Code/> '}</span>
                <label className='cs-f-links f-row f-justify-between f-align-center'>
                    <a href="">LIFO</a>
                    <span className='f-row g-10'>
                        <a href="">Repository</a>
                        <a href="">Terms</a>
                        <a href="">Documentation</a>
                    </span>
                </label>
            </section>
        </aside>
    )
}