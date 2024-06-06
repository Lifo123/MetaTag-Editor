import './Styles/Index.css'
import { useEffect } from 'react'

import Coding from '../../Components/Coding/Coding'
import Result from '../../Components/Result/Result'
import SplitterContainer from '../../Components/Splitter/SplitterContainer';


export default function Index({ setProgress }) {
    // Global States

    // Effects
    useEffect(() => {
        setProgress(30);
        setTimeout(() => {
            setProgress(100);
        }, 200);
    }, [setProgress]);

    return (
        <>
            <main className='app-render fixed h-100 w-100'>
                <SplitterContainer type={window.innerWidth < 840 ? 'vertical' : 'horizontal'} base={52}>
                    <Coding />
                    <Result />
                </SplitterContainer>
            </main>
        </>
    );
}
