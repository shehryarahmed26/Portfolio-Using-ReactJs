import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hi Everyone, I am <span className="purple">Shehryar Ahmed</span>, a <strong>Senior Full Stack Developer</strong> with over <span className="purple">6+ years of experience</span>.
  <br />
  <br />
  I specialize in building scalable web and mobile applications using <strong>React, React Native, Node.js, Express, MongoDB, Laravel, and PostgreSQL</strong>. I have worked at top companies like <span className="purple">Systems Limited</span>, <span className="purple">10Pearls</span>, and <span className="purple">Folio3</span>.
  <br />
  <br />
  I have expertise in <strong>Cloud & DevOps</strong> with AWS, Docker, Kubernetes, and CI/CD pipelines. I'm passionate about creating efficient, modular architectures that prioritize performance and security.
  <br />
  <br />
  Apart from coding, here are a few things I enjoy:
</p>
<ul>
  <li className="about-activity">
    <ImPointRight /> Mentoring Junior Developers
  </li>
  <li className="about-activity">
    <ImPointRight /> Building Scalable Architectures
  </li>
  <li className="about-activity">
    <ImPointRight /> Exploring New Technologies & Cloud Services
  </li>
</ul>


         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
