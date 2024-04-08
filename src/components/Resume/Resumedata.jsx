import React from "react";
import Card from "react-bootstrap/Card";

function Resumedata() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <span className="purple">CEO & Founder</span>{" "}
            <span>At the age of 20, I founded Innovatrix Tech, where I currently serve as the CEO. This experience has provided me with valuable insights into entrepreneurship and leadership in the tech industry.</span>
            <br />
            <br />

            <span className="purple">MERN Instructor</span>{" "}
            <span>Empowered students at Saylani Mass IT Training with comprehensive MERN stack knowledge, fostering proficient backend developers through hands-on projects and personalized guidance.</span>
            <br />
            <br />


            <span className="purple">React JS Developer</span>{" "}
            <span>at SkySoft Solutions, gaining valuable experience and skills in the field.
              Built a strong foundation in Front End Development that allowed me to fit seamlessly into the company's culture.</span>
            <br />
            <br />

            <span className="purple">Internship Experience</span>{" "}
            <span>
            Completed an internship at Coderatory, during my internship, I honed my skills in Node.js, mastering complex programming challenges with a calm approach.
            </span>
            <br />
            <br />
            <span className="purple">Internship Experience</span>{" "}
            <span>
            Completed an internship at Digitalogies, where I learned about the roadmap of Front End Development and how to effectively work in the market.
            </span>
            <br />
            <br />

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Resumedata;