import React from "react";
import "./Card2.css";

const Card2 = (props) => {
  return (
    <article className={props.s}>
      <div className="case-left">
        <span className="case-tag">{props.tag}</span>
        <h3 className="case-name">{props.title}</h3>
        <p className="case-desc">{props.desc}</p>
      </div>

      <div className="case-right">
        <div className="case-metric">
          <img src={props.icon1} alt="" />
          <div className="metric-text">
            <div className="metric-label">{props.label1}</div>
            <div className="metric-value">{props.value1}</div>
          </div>
        </div>

        <div className="case-metric">
          <img src={props.icon2} alt="" />
          <div className="metric-text">
            <div className="metric-label">{props.label2}</div>
            <div className="metric-value">{props.value2}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card2;

