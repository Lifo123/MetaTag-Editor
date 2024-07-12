import './Editor.css'

import Coding from './Coding/Coding'
import Result from './Result/Result'

export default function Editor() {
    return (
        <>
            <main className='app-render fixed h-100 w-100 f-row'>
                <Coding />
                <Result />
            </main>
        </>
    )
}