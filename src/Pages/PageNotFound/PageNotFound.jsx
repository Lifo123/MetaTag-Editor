import { useEffect } from 'react';
import './Styles/PageNotFound.css'

export default function PageNotFound({ setProgress }) {

    //Effects
    useEffect(() => {
        setProgress(30);
        setTimeout(() => {
            setProgress(100);
        }, 200)
    }, [])
    return (
        <div>
            PageNotFound
        </div>
    )
}