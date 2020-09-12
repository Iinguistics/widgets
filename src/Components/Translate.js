import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
      label: 'Afrikaans',
      value: 'af'
    },
    {
      label: 'Arabic',
      value: 'ar'
    },
    {
      label: 'Czech',
      value: 'cs'
    },
    {
      label: 'Dutch',
      value: 'nl'
    },
    {
      label: 'Greek',
      value: 'el'
    },
    {
      label: 'German',
      value: 'de'
    },
    {
      label: 'Hindi',
      value: 'hi'
    },
    {
      label: 'Italian',
      value: 'it'
    },
    {
      label: 'Irish',
      value: 'ga'
    },
    {
      label: 'Japanese',
      value: 'ja'
    },
    {
      label: 'Persian',
      value: 'fa'
    }

  ];

const Translate = ()=>{
    const [lang, setLang] = useState(options[0]);
    const [text, setText] = useState("");

     

    return(
        <div>
            <div className="ui form">
                <div className="field">
                  <label>Enter Text</label>
            <input
            value={text}
            onChange={e => setText(e.target.value)}
            />
             </div>
            </div>
           <Dropdown
            label="Select a language"
            options={options}
            selected={lang}
            onSelectedChange={setLang}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert lang={lang} text={text} />
        </div>
    )
}

export default Translate;
