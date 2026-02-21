import React from "react";
import "./Section7.css";

import Infocard from "../components/Section7com/Infocard";

import location from "../assets/loction.png";
import phone from "../assets/phone.png";
import email from "../assets/box.png";
import clock from "../assets/clock.png";

const Section7 = () => {

  const infoData = [
    {
      id: 1,
      img: location,
      title: "Address",
      text: (
        <>
          123 Legal Plaza, Suite 500 <br />
          Metropolitan City, ST 12345
        </>
      )
    },
    {
      id: 2,
      img: phone,
      title: "Phone",
      text: "+1 (555) 123-4567"
    },
    {
      id: 3,
      img: email,
      title: "Email",
      text: "contact@sterlinglaw.com"
    },
    {
      id: 4,
      img: clock,
      title: "Hours",
      text: (
        <>
          Mon–Fri: 9:00 AM – 6:00 PM <br />
          Sat: 10:00 AM – 2:00 PM
        </>
      )
    }
  ];

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-sub">
          Schedule your free consultation today
        </p>

        <div className="contact-grid">

      
          <form className="contact-form">
            <div className="form-grid">

              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>

              <div className="field">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>

              <div className="field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="field">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" />
              </div>

            </div>

            <div className="field full">
              <label>Message</label>
              <textarea
                rows="7"
                placeholder="Tell us about your legal needs..."
              ></textarea>
            </div>

            <button className="contact-btn" type="submit">
              Send Message
            </button>
          </form>

    
          <div className="contact-info">
            {infoData.map((item) => (
              <Infocard
                key={item.id}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section7;
