import './Loading.css'

export default function LoadingPage() {

    return (
        <span className='load-circle d-flex f-center m-auto absolute' style={{ scale: 0.45 }}>
            <svg className='d-flex relative'>
                <circle className='absolute' cx="70" cy="70" r="70"></circle>
            </svg>
        </span>
    )
}