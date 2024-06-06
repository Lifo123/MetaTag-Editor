import './Splitter.css'
import { Resizer } from '../../Functions/Spliters';
import { useEffect, useRef, useState } from 'react'


export default function SplitterContainer({ children, type = 'horizontal', base }) {
    const [Type, setType] = useState(type && type === 'vertical' ? 'vertical' : 'horizontal');
    //Refs
    const splitRef = useRef();

    useEffect(() => {
        splitRef.current.parentElement.classList.add(`split-container`, Type);
    }, [base])


    return (
        <>
            <section className={`split-sec1 d-flex relative ${Type}`} style={Type === 'vertical' ? { height: `${base || 50}%` } : { width: `${base || 50}%` }}>{children && children[0] || <p>Div 1</p>}</section>

            <span className={`split-btn absolute ${Type}`} onMouseDown={Resizer} style={Type === 'vertical' ? { top: `${base || 50}%` } : { left: `${base || 50}%` }} ref={splitRef}></span>

            <section className={`split-sec2 d-flex relative ${Type}`}>{children && children[1] || <p>Div 2   </p>}</section>
        </>
    )
}