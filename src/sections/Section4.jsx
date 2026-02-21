import React from "react";
import "./Section4.css";
import Card from "../components/Section4com/Card";
import lawyerimg1 from "../assets/img.jpeg";
import lawyerimg2 from "../assets/img2.jpeg";
import lawyerimg3 from "../assets/img3.jpeg";
import lawyerimg4 from "../assets/img4.jpeg";
import lawyerimg5 from "../assets/img5.jpeg";
import lawyerimg6 from "../assets/img6.jpeg";
import Tsp from "../components/Section4com/Tsp";

const Section4 = () => {
  const teamData = [
    {
      id: 1,
      name: "Michael Sterling",
      role: "Managing Partner",
      desc:
        "Specializing in corporate law and M&A with over 30 years of experience. Harvard Law School, J.D.",
      img: lawyerimg1
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Senior Partner",
      desc:
        "Leading litigation attorney with expertise in complex commercial disputes. Stanford Law School, J.D.",
      img: lawyerimg2
    },
    {
      id: 3,
      name: "David Martinez",
      role: "Partner",
      desc:
        "Real estate and property law expert handling high-value transactions. Columbia Law School, J.D.",
      img: lawyerimg3
    },
    {
      id: 4,
      name: "Jennifer Williams",
      role: "Partner",
      desc:
        "Family law specialist known for compassionate yet strategic advocacy. Yale Law School, J.D.",
      img: lawyerimg4
    },
    {
      id: 5,
      name: "Robert Kim",
      role: "Senior Associate",
      desc:
        "Employment law and regulatory compliance counsel. University of Chicago Law School, J.D.",
      img: lawyerimg5
    },
    {
      id: 6,
      name: "Emily Thompson",
      role: "Senior Associate",
      desc:
        "Intellectual property attorney protecting innovations and brands. Berkeley Law School, J.D.",
      img: lawyerimg6
    }
  ];

  return (
    <section className="team">
      <div className="team-container">
      <Tsp
  pill="Meet Our Team"
  title="Experienced Attorneys"
  sub="A team of dedicated legal professionals committed to your success"
/>


        <div className="team-grid">
          {teamData.map((member) => (
            <Card
              key={member.id}
              name={member.name}
              role={member.role}
              badge={member.badge}
              desc={member.desc}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;


