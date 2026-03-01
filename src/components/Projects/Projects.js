import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import traderverse from "../../Assets/Projects/traderverse.jpg";
import eyeora from "../../Assets/Projects/eyeora.png";
import mentorhealth from "../../Assets/Projects/mentorhealth.png";
import tanweel from "../../Assets/Projects/tanweel.jpg";
import qrgen from "../../Assets/Projects/Qrgen.png";
import onmls from "../../Assets/Projects/onmls.png";
import crazygames1 from "../../Assets/Projects/crazygames1.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects & Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          With 6+ years of experience, here are some notable projects I've built and contributed to.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traderverse}
              isBlog={false}
              title="Traderverse - Trading Platform"
              description="A comprehensive trading application built with microservices architecture. Developed robust backend services using NestJS with scalable API design. Frontend built with Vue.js featuring real-time trading data, interactive charts, and seamless user experience. Implemented WebSocket connections for live market updates and secure authentication systems."
              demoLink="https://app.traderverse.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eyeora}
              isBlog={false}
              title="Eyeora - VR/XR Platform"
              description="An innovative VR/XR platform developed using Angular for the frontend and Laravel (PHP) for backend services. Features immersive virtual reality experiences, 3D content rendering, and cross-platform compatibility. Integrated advanced VR SDKs and optimized performance for smooth user interactions across Oculus and Pico devices."
              demoLink="https://www.eyeora.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentorhealth}
              isBlog={false}
              title="MentorHealth - Healthcare Platform"
              description="A multi-tenant health assurance platform built with React Native for mobile and NestJS microservices architecture. Features include patient management, telemedicine integration, appointment scheduling, and real-time health monitoring. Implemented secure data handling compliant with healthcare standards and scalable infrastructure for multiple healthcare providers."
              demoLink="https://thementorhealth.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tanweel}
              isBlog={false}
              title="Tanweel - Logistics & Delivery"
              description="A last-mile delivery logistics platform for Saudi Arabia built with Java and Spring Boot. Features real-time order tracking, route optimization, driver management, and advanced dispatch systems. Developed RESTful APIs handling high-volume transactions with minimal latency, supporting restaurant and food delivery operations across major Saudi cities."
              demoLink="https://tanweel.sa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrgen}
              isBlog={false}
              title="QR-Gen - Dynamic QR Generator"
              description="Led development of a high-performance, scalable QR code generation system at Systems Limited. Built with React, Node.js, Express, MongoDB, and Redux. Features real-time updates via Socket.io, CI/CD with GitHub Actions & Docker, and 90%+ test coverage."
              demoLink="https://qr-gen.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onmls}
              isBlog={false}
              title="OnMLS - Real Estate Platform"
              description="Developed a modern real estate web application enabling users to browse, search, and post verified property listings. Features include advanced filters, map integration, property comparison, and clean responsive UI. Built with React.js, Tailwind CSS, and integrated RESTful APIs."
              demoLink="https://onmls.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crazygames1}
              isBlog={false}
              title="CrazyGames - Browser Games Hub"
              description="Created a game aggregation platform hosting free-to-play browser games across categories like .io, arcade, and puzzle. Optimized for performance and user engagement using PHP, WordPress, and custom plugins. Features include game categories, user ratings, and responsive design."
              demoLink="https://crazygames1.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
