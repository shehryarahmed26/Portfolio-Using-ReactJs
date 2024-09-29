import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shehryar Ahmed </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            I am currently learning Mern Stack at Saylani Mass IT Training.
            <br />
            I have completed DAE in Information Technology at GCT Site, Karachi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making Tech Toturials for youtube
            </li>
            <li className="about-activity">
              <ImPointRight /> Contineous learning
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
