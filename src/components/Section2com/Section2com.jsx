import React from "react";
import "./Section2com.css";

const Section2com = (props) => {
  return (
    <div className="stat">
      <div className="stat-icon">
        <img src={props.icon} alt="stat icon" />
      </div>

      <div className="stat-number">{props.number}</div>
      <div className={props.s}>{props.label}</div>
    </div>
  );
};

export default Section2com;


