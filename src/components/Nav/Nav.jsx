import React from 'react';
import "./Nav.css"
import img1 from "../../assets/logo.png"
import img2 from "../..//assets/Icon.png"
import Navtext from './Navtext';

const Nav = () => {
    return (  
        
        <header className="site-header">
        <div className="container nav">
          <a className="brand" href="a">
          <img src={img1} />
          </a>
  
          <nav className="menu">
          <Navtext text="About" link="/" s="nav-link" />
          <Navtext text="Practice Areas" link="/" s="nav-link" />
          <Navtext text="Team" link="/" s="nav-link" />
         <Navtext text="Case Studies" link="/" s="nav-link" />
         <Navtext text="Testimonials" link="/" s="nav-link" />
         <Navtext text="FAQ" link="/" s="nav-link" />
         <Navtext text="Contact" link="/" s="nav-link" />
          </nav>
  
          <button className="theme-btn" type="button" aria-label="Toggle theme">
            <img src={img2} />
          </button>
        </div>
      </header> );
}
 
export default Nav;