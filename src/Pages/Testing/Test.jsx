import './Test.css'

import SplitterContainer from '../../Components/Splitter/SplitterContainer';


export default function Index() {
    //Custom Hooks


    // Effects


    return (
        <div className='rectangle fixed br-10'>
            <SplitterContainer Type=''>
                <div className='recmain1 f-col'>
                    first content
                    <h1>Titulo largo</h1>
                </div>
                <SplitterContainer Type='vertical' >
                    <div className='recmain1 f-col'>
                        first content
                        <h1>Titulo largo</h1>
                    </div>
                    <div className='recmain1 f-col'>
                        Second
                    </div>
                </SplitterContainer>
            </SplitterContainer>
        </div>
    );
}
