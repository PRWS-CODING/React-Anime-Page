import React from "react";
import "./About.css";
import resumePDF from "./Paul-Resume.pdf";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hello! My name is Paul, and I am an aspiring web developer with a
        passion for building intuitive and dynamic user experiences. My journey
        into web development is driven by a desire to create useful and engaging
        applications.
      </p>
      <p>
        I have a solid foundation in core web technologies including{" "}
        <strong>HTML, CSS, and JavaScript</strong>, and I am currently expanding
        my skills by diving deep into the <strong>React</strong> ecosystem.
      </p>
      <p>
        I am proud to have designed, built, and deployed{" "}
        <a
          href="https://yard-walk-2-0.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          a full-stack application
        </a>{" "}
        which has been actively used since September of last year. I continue to
        maintain and host this project, which has given me invaluable hands-on
        experience in the complete development lifecycle.
      </p>
      <p>
        I am actively seeking opportunities to transition into a professional
        web development role where I can contribute my skills, continue to
        learn, and grow as part of a talented team.
      </p>
      <div className="resume-link">
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default About;
