import React from "react";
import "./Tsp.css";
import Title from "../Section3com/Title";

const Tsp = (props) => {
  return (
    <>
      <Title s="about-pill" text={props.pill} />

      <h2 className="team-title">
        {props.title}
      </h2>

      <p className="team-sub">
        {props.sub}
      </p>
    </>
  );
};

export default Tsp;

