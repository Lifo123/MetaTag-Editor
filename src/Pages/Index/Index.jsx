import { Link } from 'react-router-dom'
import './Index.css'

export default function Index() {
    return (
        <main>
            <header className="i-header f-row f-justify-between f-align-center px-5">
                <a href=''>METAG Editor</a>
                <ul className='f-row g-10'>
                    <li><a href="">Repository</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Documentation</a></li>
                </ul>
            </header>
            <section className="i-main f-col f-align-center">
                <h1>Edit your MetaTags and get the code</h1>
                <p>Make sure your website is ready to be shared on Social media Platforms</p>
                <Link className="i-btn br-max pointer" to={'/Edit'}>Get Started</Link>
            </section>

        </main>
    )
}