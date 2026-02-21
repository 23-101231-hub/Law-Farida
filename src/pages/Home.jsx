import React, { useState } from 'react';
import "../Home.css";
import "../theme.css";

import Nav from '../components/Nav/Nav';
import Hero from '../sections/Hero';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Section4 from '../sections/Section4';
import Section5 from '../sections/Section5';
import Section6 from '../sections/Section6';
import Section7 from '../sections/Section7';
import Footer from '../components/Footer/Footer';

const Home = () => {

  const [theme, setTheme] = useState("dark");

  return (
    <div className={`app ${theme}`}>
      
      <Nav theme={theme} setTheme={setTheme} />

      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />

    </div>
  );
};

export default Home;
