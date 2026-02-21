import React from 'react';
import "./Section2.css";
import Section2com from '../components/Section2com/Section2com';

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const Section2 = () => {
  return (
    <section className="stats">
      <div className="stats-container">

        <Section2com 
          icon={icon1}
          number="25+"
          label="Years of Experience"
          s="stat-label"
        />

        <Section2com 
          icon={icon2}
          number="98%"
          label="Success Rate"
          s="stat-label"
        />

        <Section2com 
          icon={icon3}
          number="2000+"
          label="Satisfied Clients"
          s="stat-label"
        />

      </div>
    </section>
  );
};

export default Section2;

