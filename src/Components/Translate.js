import React, {useState, useEffect} from 'react';
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
      label: 'Hindi',
      value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
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