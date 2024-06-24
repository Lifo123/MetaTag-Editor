import './Editor.css'

import SplitterContainer from '../../Components/Splitter/SplitterContainer'
import Coding from './Coding/Coding'
import Result from './Result/Result'

export default function Editor() {
    return (
        <>
            <main className='app-render fixed h-100 w-100'>
                <SplitterContainer type={window.innerWidth < 840 ? 'vertical' : 'horizontal'} base={window.innerWidth < 840 ? 40 : 48}>
                    <Coding />
                    <Result />
                </SplitterContainer>
            </main>
        </>
    )
}