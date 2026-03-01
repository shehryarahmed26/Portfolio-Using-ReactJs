import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Full Stack Developer",
          "MERN Stack Expert",
          "React & React Native Developer",
          "Cloud & DevOps Engineer",
          "Backend Architect"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
