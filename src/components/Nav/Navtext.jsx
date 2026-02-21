import React from "react";
import "./Navtext.css";

const Navtext = (props) => {
  return (
    <a href={props.link} className={props.s}>
      {props.text}
    </a>
  );
};

export default Navtext;
