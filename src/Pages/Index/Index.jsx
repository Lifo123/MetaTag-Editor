import './Styles/Index.css'
import { useEffect } from 'react'

import Coding from '../../Components/Coding/Coding'
import Result from '../../Components/Result/Result'


export default function Index({setProgress}) {
    
    //Effects
    useEffect(() => {
        setProgress(30);
        setTimeout(() => {
            setProgress(100);
        }, 200)
    }, [])


    return (
        <main className='f-row app-render fixed h-100 w-100'>
            <Coding />
            <Result />
        </main>
    )
}