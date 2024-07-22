import './Google.css'

export default function Google({ data }) {
    return (
        <main className='f-col g-20'>
            <section className='f-col'>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.SiteName || 'MetaTag-Editor'}</a>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}</a>
                <p>{data.Description || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'}</p>
            </section>

            <section className='f-col'>
                <label className='f-row f-align-center g-10'>
                    <span>Logo</span>
                    <a className='f-col' href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>
                        <p>{data.SiteName || 'MetaTag-Editor'}</p>
                        <a>{data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}</a>
                    </a>
                    <span className='d-flex f-center'>icon</span>
                </label>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.Tittle || 'MetaTags Editor - Preview'}</a>
                <p>{data.Description || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'}</p>
            </section>
        </main>
    )
}