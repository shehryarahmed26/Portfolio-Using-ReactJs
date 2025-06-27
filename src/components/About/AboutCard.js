import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Shehryar Ahmed</span>, a passionate <strong>Software Engineer</strong> specializing in full-stack web development.
  <br />
  I'm focused on building saas applications using modern technologies like <strong>React, Next.js, Node.js, MongoDB, PostgreSql</strong>. Over the past year, I’ve grown significantly through continuous learning and hands-on experience.
  <br />
  <br />
  Apart from coding, here are a few activities I enjoy that help me stay sharp and creative:
</p>
<ul>
  <li className="about-activity">
    <ImPointRight /> Playing Chess 
  </li>
  <li className="about-activity">
    <ImPointRight /> Creating & Sharing Tech Content
  </li>
  <li className="about-activity">
    <ImPointRight /> Building Side Projects & Exploring New Things
  </li>
</ul>


         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
