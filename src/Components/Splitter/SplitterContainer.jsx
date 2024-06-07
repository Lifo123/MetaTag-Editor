import './Splitter.css'
import { useSplit } from '../../hooks/useSplit/useSplit';
import { useRef } from 'react'


export default function SplitterContainer({ children, Type = 'horizontal', base = 50, Tag = 'div' }) {
    const splitterRef = useRef(null);
    const validType = Type === 'horizontal' || Type === 'vertical' ? Type : 'horizontal';
    const { Split } = useSplit(splitterRef, validType, base);

    return (
        <>
            {
                children && children.length === 2 ? (
                    <Tag className={`split-cont relative ${validType}`}>
                        <section className={`split1`} style={validType === 'horizontal' ? {width: `${base}%`} : {height: `${base}%`}} >{children[0]}</section>
                        <span className={`split-btn absolute ${validType}`} onMouseDown={Split} style={validType === 'horizontal' ? {left: `${base}%`} : {top: `${base}%`}} ref={splitterRef}></span>
                        <section className={`split2`}>{children[1]}</section>
                    </Tag>
                ) : console.error('Error in Childres')
            }
        </>
    )
}