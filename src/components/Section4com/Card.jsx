import React from "react";
import "./Card.css";
import iconin from "../../assets/IN.png"
import iconm from "../../assets/MESSAGE.png"

const Card = ({ name, role, badge, desc, img }) => {
  return (
    <article className="team-card">
      
      <div className="team-photo">
        <img 
          className="team-img"
          src={img}
          alt={name}
        />
      </div>

      <div className="team-body">
        <h3 className="team-name">{name}</h3>

        <div className="team-role">
          {role}
          <span className="team-badge">{badge}</span>
        </div>

        <p className="team-desc">{desc}</p>

        <div className="team-social">
          <a className="soc" href="a" aria-label="LinkedIn">
            <img src={iconin} />
          </a>
          <a className="soc" href="a" aria-label="Email">
          <img src={iconm} />
          </a>
        </div>
      </div>

    </article>
  );
};

export default Card;




