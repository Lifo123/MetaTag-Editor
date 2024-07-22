import './Facebook.css'

export default function Facebook({ data }) {
    return (
        <main className='f-col g-20'>
            <section className='f-col'>
                <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'} target='_blank'>{data.URL || 'lifo123.github.io'}</a>
                <label>{data.Tittle || 'MetaTag Editor - Preview'}</label>
                <span>i</span>
            </section>
            <section className='f-col'>
                <span>{data.ImgURL}</span>
                <div className='f-col'>
                    <a href={data.URL || 'https://Lifo123.github.io/MetaTag-Editor/'} target='_blank'>{data.URL || 'lifo123.github.io'}</a>
                    <label>{data.Tittle || 'MetaTag Editor - Preview'}</label>
                    <p>{data.Description || 'With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!'}</p>
                    <span>i</span>
                </div>
            </section>
        </main>
    )
}