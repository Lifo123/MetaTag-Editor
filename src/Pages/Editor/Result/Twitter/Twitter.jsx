import './Twitter.css'

export default function Twitter({ data }) {
    return (
        <main className='f-col g-20'>
            <section className='t-card f-col'>
                <span>{data.ImgURL}</span>
                <p className='t-link'>{data.URL || 'lifo123.github.io'}</p>
                <label>{data.Tittle || 'MetaTag-Editor'}</label>
                <p>{data.Description || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'}</p>
            </section>
            <section className='f-col'>
                <div className='t-card'>
                    <p>{data.SiteName || 'MetaTag-Editor'}</p>
                </div>
                <span className='t-link f-row g-5'>From <p className='t-link'>{data.URL || 'lifo123.github.io'}</p></span>
            </section>
        </main>
    )
}