import './Twitter.css'

export default function Twitter({ data }) {
    return (
        <main className='f-col g-20'>
            <section className='f-col'>
                <span>{data.ImgURL}</span>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.URL || 'lifo123.github.io'}</a>
                <label>{data.Tittle || 'MetaTag-Editor'}</label>
                <p>{data.Description || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'}</p>
            </section>
            <section>
                <div>
                    <p>{data.SiteName || 'MetaTag-Editor'}</p>
                </div>
                <span>From <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.URL || 'lifo123.github.io'}</a></span>
            </section>
        </main>
    )
}