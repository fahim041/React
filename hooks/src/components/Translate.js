import React, {useState} from 'react';
import Dropdown from './dropdown';
import Convert from "./Convert";

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options =  [
    {
        label : 'Afrikaans',
        value : 'af'
    },
    {
        label : 'Arabic',
        value : 'ar'
    },
    {
        label : 'Hindi',
        value : 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div style={style.margin}>
            <div className="ui form">
                <div className="field" style={{width:'50%'}}>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            
            <Dropdown 
            options={options} 
            selected = {language}
            onSelectedChange = {setLanguage}
            name = "Select a Language: "
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}

const style = {
    margin : {
        marginTop: '20px'
    }
}

export default Translate;