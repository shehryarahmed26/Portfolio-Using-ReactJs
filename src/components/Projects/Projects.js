import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moviesapp from "../../Assets/Projects/Moviesapp.png";
import carsshowroom from "../../Assets/Projects/Carsshowroom.png";
import chatpk from "../../Assets/Projects/Chatpk.png";
import avengers from "../../Assets/Projects/Game.png";
import Game from "../../Assets/Projects/Game.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import elitebazaar from "../../Assets/Projects/elitebazaar.PNG";
import netflix from "../../Assets/Projects/netflix.png";
import tivo from "../../Assets/Projects/Tivo.png";
import qrgen from "../../Assets/Projects/Qrgen.png";
import onmls from "../../Assets/Projects/onmls.png";
import crazygames1 from "../../Assets/Projects/crazygames1.png";
// import tivo from "../Assets/Projects/Tivo.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={qrgen}
    isBlog={false}
    title="QR-Gen – Dynamic QR Code Generator"
    description="A fully functional SaaS platform that allows users to generate both static and dynamic QR codes with real-time URL redirection, logo customization, analytics, and editable design. Built using React, TypeScript, Tailwind CSS, and Redux."
    // ghLink="https://github.com/shehryarahmed26/qr-gen"
    demoLink="https://qr-gen.com"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={onmls}
    isBlog={false}
    title="OnMLS – Real Estate Listing Platform"
    description="Developed a modern real estate web application enabling users to browse, search, and post verified property listings without any fees. Features include advanced filters, map integration, and a clean UI. Built with React.js, Tailwind CSS."
    // ghLink="https://github.com/shehryarahmed26/onmls"
    demoLink="https://onmls.com"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={crazygames1}
    isBlog={false}
    title="CrazyGames – Online Browser Games Hub"
    description="Created a game aggregation platform hosting a collection of free-to-play browser games across categories like .io, arcade, and puzzle. Optimized for performance and user engagement using php and wordpress."
    // ghLink="https://github.com/shehryarahmed26/crazygames"
    demoLink="https://crazygames1.com"
  />
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tivo}
              isBlog={false}
              title="Tivo - blogging platform"
              description="A Full Stack blogging platform with admin dashboard using react, node, express and mongodb."
              ghLink="https://github.com/shehryarahmed26/TiVO----MERN"
              demoLink="https://tivo-sh.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elitebazaar}
              isBlog={false}
              title="Elite-Bazaar"
              description="Ecommerce website using Reactjs, Tailwindcss, Ant Design and dummyjson api integration."
              ghLink="https://github.com/shehryarahmed26/EliteBazaar-Ecommerce-site-"
              demoLink="https://elite-bazaar.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatpk}
              isBlog={false}
              title="Chat-pk"
              description=" Real-time Chat Application using Reactjs, Firebase and tailwind css. handling  firebase google authenthication login/logout, firebase firestore and real time functionality"
              ghLink="https://github.com/shehryarahmed26/Chat.pk"
              demoLink="https://chat-pk-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix-inspired Movies App"
              description="Built a netflix inspired movies app using ReactJs, also includes the api intigraion, search functionality, pagination, skeleton loading, responsive courosoel and dynamic routing "
              ghLink="https://github.com/shehryarahmed26/netflix-react"
              demoLink="https://netflix-sh.vercel.app/"
            />
          </Col>
          
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carsshowroom}
              isBlog={false}
              title="Cars Showroom"
              description="Carsshowroom webapp using html, css, js, animate.css. handling nested for in loops for cars data integration"
              ghLink="https://github.com/shehryarahmed26/carsbuy-showroom-webapp"
              demoLink="https://carsbuy-showroom.netlify.app"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avengers}
              isBlog={false}
              title="Fighting Game"
              description="build a marvel game using html css and js. handling gifs on key pressing and animation."
              ghLink="https://github.com/shehryarahmed26/Game-Animation"
              demoLink="https://game-animation-sh.netlify.app/"

              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot-pk"
              description="A JavaScript-based chatbot using Firebase with dynamic prompt handling. Unmatched prompts are stored in Firebase for future logic updates.."
              ghLink="https://github.com/shehryarahmed26/Chatbot"
              demoLink="https://chatbot-pk.vercel.app/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
