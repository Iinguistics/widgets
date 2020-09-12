import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({ lang, text })=>{
   const [ results , setResults] = useState("");

   useEffect(()=> {
     const search = async()=>{
     const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{}, {
        params:{
            q: text,
            target: lang.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
        }
        });
        setResults(data.data.translations["0"].translatedText);
        
     }
     
     const timeoutId = setTimeout(()=>{
        if(text !== ""){
            search();
         }
     }, 700);

     return ()=>{
         clearTimeout(timeoutId)
     }

   }, [lang, text]);
   

   const displayResults = ()=>{
       return(
       <p>{results}</p>
       )
   }



   
    return (
        <div>
        {displayResults()}
        </div>
    )
}

export default Convert;