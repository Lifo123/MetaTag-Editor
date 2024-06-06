import './Test.css'
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
            <main className='Test br-10'>
                <SplitterContainer>
                    <Coding />
                    <Result />
                </SplitterContainer>
            </main>

        </>
    );
}
