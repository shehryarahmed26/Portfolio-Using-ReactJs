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
              imgPath={carsshowroom}
              isBlog={false}
              title="Cars Showroom"
              description="Carsshowroom webapp using html, css, js, animate.css. handling nested for in loops for cars data integration"
              ghLink="https://github.com/shehryarahmed26/carsbuy-showroom-webapp"
              demoLink="https://carsbuy-showroom.netlify.app"              
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot-pk"
              description="A JavaScript-based chatbot using Firebase with dynamic prompt handling. Unmatched prompts are stored in Firebase for future logic updates.."
              ghLink="https://github.com/shehryarahmed26/Chatbot"
              demoLink="https://chatbot-pk.vercel.app/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
