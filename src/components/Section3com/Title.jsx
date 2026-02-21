import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <span className={props.s}>
      {props.text}
    </span>
  );
};

export default Title;
