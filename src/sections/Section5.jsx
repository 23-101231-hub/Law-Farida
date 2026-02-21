import React from 'react';
import "./Section5.css";
import Tsp from '../components/Section4com/Tsp';
import Card2 from '../components/Section5com/Card2';
import icon20 from "../assets/icon2.png";
import icon21 from "../assets/icon21.png"

const Section5 = () => {
    return ( <section className="cases">
        <div className="cases-container">
        <Tsp
  pill="Success Stories"
  title="Case Studies & Achievements"
  sub="Real results for real clients across diverse legal challenges"
/>
      
          <div className="cases-list">
          
          <Card2
  s="case-card"
  tag="Corporate M&A"
  title="Multi-Million Dollar Acquisition"
  desc="Successfully negotiated and closed a complex merger for a tech startup."
  icon1={icon20}
  label1="Outcome"
  value1="$45M Transaction Value"
  icon2={icon21}
  label2="Result"
  value2="6-week closing"
/>

      
         
<Card2
  s="case-card"
  tag="Litigation"
  title="Commercial Dispute Resolution"
  desc="Won favorable settlement in high-stakes contract dispute for corporate client."
  icon1={icon20}
  label1="Outcome"
  value1="$8.5M Settlement"
  icon2={icon21}
  label2="Result"
  value2="95% recovery"
/>
      
         
<Card2
  s="case-card"
  tag="Real Estate"
  title="Commercial Development Deal"
  desc="Facilitated complex zoning approval and financing for major development project."
  icon1={icon20}
  label1="Outcome"
  value1="150,000 sq ft"
  icon2={icon21}
  label2="Result"
  value2="Ahead of schedule"
/>
          </div>
        </div>
      </section>
       );
}
 
export default Section5;
