import React, {useState} from 'react';
import Accordian from './Components/Accordian';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';


const items = [
  {
    title: 'what is react',
    content: 'React is a frontend js framework'
  },
  {
    title: 'Why use react',
    content: 'React is a favorite js library among engineers'
  },
  {
    title: 'How do you use react?',
    content: 'You use react by creating components'
  }

];

const options = [
    {
      label: "Red",
      value: "The Color red & wine"
    },

    {
      label: "Blue",
      value: "The Color blue like the sky"
    },

    {
      label: "Green",
      value: "The Color green like paddy's pub"
    },


]




const App = ()=>{

  const [selected, setSelected] = useState(options[0]);

  
        return(
         <div>
           <Header />
          <Route path='/'>
            <Accordian items={items}/>
          </Route>
          <Route path='/list'>
            <Search />
          </Route>
          <Route path='/dropdown'>
            <Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
          </Route>
          <Route path='/translate'>
            <Translate />
          </Route>
         </div>
        );
  }

export default App;