import React, { useState } from "react";
import "./Section7.css";

import Infocard from "../components/Section7com/Infocard";

import location from "../assets/loction.png";
import phone from "../assets/phone.png";
import emailIcon from "../assets/box.png";
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
      img: emailIcon,
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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));

    if (status === "success") setStatus("idle");
  };

  const validate = () => {
    const newErrors = {};

    const nameValue = form.name.trim();
    const emailValue = form.email.trim();
    const phoneValue = form.phone.trim();
    const messageValue = form.message.trim();

    if (!nameValue) newErrors.name = "Full name is required";

    if (!emailValue) {
      newErrors.email = "Email is required";
    } else {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
      if (!emailOk) newErrors.email = "Enter a valid email";
    }

    if (phoneValue) {
      const phoneOk = /^[0-9+\s()-]{7,}$/.test(phoneValue);
      if (!phoneOk) newErrors.phone = "Enter a valid phone number";
    }

    if (!messageValue) {
      newErrors.message = "Message is required";
    } else if (messageValue.length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus("idle");
      return;
    }

    // هنا مكان إرسال البيانات للسيرفر لو عندك API
    setStatus("success");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-sub">Schedule your free consultation today</p>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {status === "success" && (
              <div className="form-success">Message sent successfully</div>
            )}

            <div className="form-grid">
              <div className="field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                {errors.name && <small className="form-error">{errors.name}</small>}
              </div>

              <div className="field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
                {errors.email && <small className="form-error">{errors.email}</small>}
              </div>

              <div className="field">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <small className="form-error">{errors.phone}</small>}
              </div>

              <div className="field">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                />
              </div>
            </div>

            <div className="field full">
              <label>Message</label>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your legal needs..."
              ></textarea>
              {errors.message && (
                <small className="form-error">{errors.message}</small>
              )}
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
