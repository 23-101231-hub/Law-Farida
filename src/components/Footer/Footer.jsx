import React from "react";
import "./Footer.css";
import Footertext from "./Footertext";
import logo from "../../assets/logo.png";

const Footer = () => {

  const footerData = [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/" },
        { label: "Practice Areas", href: "/" },
        { label: "Our Team", href: "/" },
        { label: "Contact", href: "/" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Service", href: "/" },
        { label: "Disclaimer", href: "/" },
        { label: "Cookie Policy", href: "/" }
      ]
    },
    {
      title: "Practice Areas",
      links: [
        { label: "Corporate Law", href: "/" },
        { label: "Real Estate", href: "/" },
        { label: "Family Law", href: "/" },
        { label: "Personal Injury", href: "/" }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-row">
              <img src={logo} alt="Sterling and Partners logo" />
              <h3 className="brand-name">Sterling & Partners</h3>
            </div>

            <p className="brand-desc">
              Providing exceptional legal services with integrity, expertise, and dedication since 1994.
            </p>

            <div className="footer-social">
              <a className="soc" href="/">f</a>
              <a className="soc" href="/">x</a>
              <a className="soc" href="/">in</a>
              <a className="soc" href="/">ig</a>
            </div>
          </div>

          {/* Dynamic Columns */}
          {footerData.map((section, index) => (
            <Footertext
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copy">
            © 2026 Sterling & Partners. All rights reserved.
          </p>
          <p className="note">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;