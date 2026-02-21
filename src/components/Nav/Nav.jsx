import React from 'react';
import "./Nav.css";
import img1 from "../../assets/logo.png";
import Navtext from './Navtext';

const Nav = (props) => {

  const handleTheme = () => {
    props.setTheme(
      props.theme === "dark" ? "light" : "dark"
    );
  };

  return (  
    <header className="site-header">
      <div className="container nav">

        <a className="brand" href="/">
          <img src={img1} alt="Company Logo" />
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
  
        <button
          className="theme-btn"
          type="button"
          onClick={handleTheme}
          aria-label="Toggle theme"
        >
          {props.theme === "dark" ? "☀️" : "🌙"}
        </button>

      </div>
    </header>
  );
};

export default Nav;