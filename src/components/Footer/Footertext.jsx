import React from "react";
import "./Footertext.css";

const Footertext = (props) => {
  return (
    <div className="footer-col">
      <h4 className="footer-title">{props.title}</h4>

      <ul className="footer-list">
        {props.links.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footertext;
