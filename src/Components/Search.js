import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = ()=>{
   const [term, setTerm] = useState("");
   const [results, setResults] = useState([]);
   
   // every time term state is updated....which will be everytime user enters into the input bar
   useEffect(()=>{
     const search = async()=>{
       const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
           params: {
               action: 'query',
               list: 'search',
               origin: '*',
               format: 'json',
               srsearch: term
           }
       });
       // update results state with the api call data
       setResults(data.query.search);
     };

    const timeoutId = setTimeout(()=>{
        if(term !== ""){
            search();
         }
     }, 700);

     return ()=>{
         clearTimeout(timeoutId)
     }
     
   },[term]);

       const data = results.map((item)=>{
        return(
            <div className="item" key={item.pageid}>
                <div className="right floated content">
                    <a target="_blank" rel="noopener noreferrer" href={`https://en.wikipedia.org?curid=${item.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                 <div className="header">
                 {item.title}
                 </div>
                 <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
                </div>
            </div>
        )
       })

    return(
        <div>
          <div className="ui form">
              <div className="field">
                  <label>Enter Search Term</label>
                  <input
                  value={term}
                  onChange={e => setTerm(e.target.value)}
                  className="input" />
              </div>
          </div>
          <div className="ui celled list">
          {data}
          </div>
        </div>
    )
};




export default Search;