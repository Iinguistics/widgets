import React from 'react';
import Link from './Link';



const Header = ()=>{
return(

    <div className="ui secondary pointing menu">
            <Link className="item" href="/">
            Accordian
            </Link>
            <Link className="item" href="/list">
            Search Wiki
            </Link>
            <Link className="item" href="/dropdown">
            Color picker
            </Link>
            <Link className="item" href="/translate">
            Translate
            </Link>
            <Link className="item" href="/youtube">
            Youtube
            </Link>

    </div>
)
};


export default Header;