import React from 'react';
import "./Section3.css";
import img5 from "../assets/Container.png"
import Title from '../components/Section3com/Title';
import P from '../components/Section3com/P';

const Section3 = () => {
    return ( <section className="about">
        <div className="about-container">
       
          <div className="about-left">
           <Title />
      
            <h2 className="about-title">
              Built on Trust, Driven<br />
              by Excellence
            </h2>
      
            <p className="about-text">
              Our team of seasoned attorneys brings deep expertise across multiple practice areas,
              ensuring comprehensive support for our clients’ most complex legal challenges. We believe
              in building lasting relationships based on trust, transparency, and tangible results.
            </p>
      
            <ul className="about-list">
  <P text="Unwavering commitment to client confidentiality" />
  <P text="Strategic, results-driven approach to every case" />
  <P text="Transparent communication and fee structures" />
  <P text="Decades of combined legal expertise" />
</ul>

          </div>
      
         
          <div className="about-right">
            <div className="about-card">
            <img className='about-img' src={img5} />
              <div className="about-overlay"></div>
            </div>
          </div>
        </div>
      </section>
       );
}
  
export default Section3;
