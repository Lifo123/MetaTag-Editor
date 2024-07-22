import './Linkedin.css'

export default function Linkedin({ data }) {
    return (
        <main className='f-col g-20'>
            <section className='f-col'>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.Tittle || 'MetaTag Editor - Preview'}</a>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.URL || 'lifo123.github.io'}</a>
            </section>
            <section className='f-col'>
                <span>{data.ImgURL}</span>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.Tittle || 'MetaTag Editor - Preview'}</a>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.URL || 'lifo123.github.io'}</a>
            </section>
        </main>
    )
}