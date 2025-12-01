import {useState} from 'react'
import {WebLinks} from './WebLinks'
import { Link } from 'react-router-dom';

import './Navbar.css'

export function Navbar(){

    const [visible,setVisible] = useState(false);
    window.onresize=()=>{
        document.querySelector(".toggle_links").style.display="none"
        setVisible(false);
         
         
    }
    return(
        <nav className={"p-30 pl-50  flex-column row-gap-20 w-100"}>
  <div className={"column-gap-20 flex-row ai-center jc-spaceb"}>
    <Link to='/'>
     <img src='Pages/images/black_logo.png' alt="1Palestine Logo" width="150px" />
    </Link>
  
    <div className="nav-toggle flex-row column-gap-30 weight-700">
       <WebLinks />
    </div>
    <div>
      <button className="weight-700">Take Action</button>
    </div> 
    <div className="toggle" onClick={()=>{
        document.querySelector(".toggle_links")
        .style.display = visible ? "none":"flex"
        setVisible(!visible);
}}>

    </div>
  </div>
  <div className="toggle_links">
    <div className="flex-column row-gap-10 weight-700 jc-end">
        <WebLinks />
    </div>
  </div>
  </nav>
    );
}