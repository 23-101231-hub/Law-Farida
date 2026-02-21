import React from "react";
import "./Hero.css";
import img3 from "../assets/arrow.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Trusted Legal Counsel<br />
          for <span className="accent">Individuals</span> and<br />
          <span className="accent">Businesses</span>
        </h1>

        <p>
          With over 25 years of experience, we provide strategic legal
          solutions tailored to your unique needs.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="/">
            Book Consultation <img src={img3} />
          </a>
          <a className="btn btn-ghost" href="/">
            View Practice Areas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

