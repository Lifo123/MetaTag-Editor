import './Discord.css'

export default function Discord({ data }) {
    return (
        <main className='f-col g-20'>
            <section className='f-col'>
                <span>{data.SiteName || 'MetaTag-Editor'}</span>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.Tittle || 'MetaTag Editor - Preview'}</a>
                <p>{data.Description || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'}</p>
            </section>
            <section className='f-col'>
                <span>{data.SiteName || 'MetaTag-Editor'}</span>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'}>{data.Tittle || 'MetaTag Editor - Preview'}</a>
                <p>{data.Description || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'}</p>
                <div>
                    {data.ImgURL}
                </div>
            </section>
        </main>
    )
}