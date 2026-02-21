import React from "react";
import "./Infocard.css";

const Infocard = (props) => {
  return (
    <div className="info-card">
      
      <div className="info-icon">
        <img src={props.img} alt={props.title} />
      </div>

      <div className="info-text">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>

    </div>
  );
};

export default Infocard;
