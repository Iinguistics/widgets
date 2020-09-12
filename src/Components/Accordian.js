import React, { useState } from 'react';


const Accordian = (props)=>{
  const [activeIndex, setActiveIndex] = useState(null);
  
    const onTitleClick = (index)=>{
        setActiveIndex(index);
    }

const items = props.items.map((item, index)=>{
    // Conditional (ternary) operator for semantic ui class
    const active = index === activeIndex ? 'active' : '';
return(
    <React.Fragment key={item.title}>
     <div onClick={()=> onTitleClick(index)} className={`title ${active}`}>
     <i className="dropdown icon"></i>
     {item.title}
     </div>
     <div className={`content ${active}`}>
     <p>{item.content}</p>
     </div>
    </React.Fragment>
    
)
})

    return(
     <div className="ui styled accordion container">
         {items}
         </div>

    );
};


export default Accordian;