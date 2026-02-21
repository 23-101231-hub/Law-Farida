import React from "react";
import "./P.css";

const P = (props) => {
  return (
    <li className={props.s}>
        
      {props.text}
    </li>
  );
};

export default P;

