import { Link } from 'react-router-dom'
import './Index.css'

export default function Index() {
    return (
        <main>
            <header className="i-header f-row f-justify-between f-align-center px-5">
                <Link to='/'>METAG Editor</Link>
                <ul className='i-h-nav f-row g-15'>
                    <li><a href="https://github.com/Lifo123/MetaTag-Editor" target='_blank'>Repository</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Documentation</a></li>
                </ul>
            </header>
            <section className="i-main f-col f-align-center">
                <h1 className='text-center'>Edit your MetaTags info for Social Media</h1>
                <p className='text-center'>Make sure your website is ready to be shared on Social media Platforms</p>
                <Link className="i-btn br-max pointer" to={'/Edit'}>Get Started</Link>
            </section>

        </main>
    )
}