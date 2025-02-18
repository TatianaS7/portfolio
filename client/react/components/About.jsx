import React from "react";
import { Fonts } from "../constants/Font";
import "../styles/About.css";
import { Button, Image } from "react-bootstrap";
import ContactForm from "./ContactForm";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutSection">
        <h1 className="header" style={Fonts.pageHeader}>
          About Me
        </h1>
        <div className="scrollDiv" style={Fonts.paragraph}>
          <p className="about-text">
            Creativity has always been at the heart of who I am. In high school,
            I was part of the Fine Arts Academy, where I explored everything
            from photography and painting to graphic design and drawing with
            various mediums. One of my first projects in app development was
            building my own art portfolio to reflect my personal style, which
            sparked my interest in using technology for creative expression.
            <br />
            <br />
            As I continue my journey in software engineering, I'm driven by the
            desire to use technology to improve both my personal life and the
            lives of those around me. One key project is creating a digital
            archive of my{" "}
            <a
              className="ref"
              href="https://chuckstewartphotography.com/work"
              target="_blank"
            >
              grandfather's photography
            </a>
            , which documents legendary Jazz and Blues musicians from the 1940s
            to the 1990s. This combines my technical skills with my family’s
            legacy, preserving his work for future generations. <br />
            <br />
            Through these endeavors, I’m constantly learning and exploring how
            technology can be used to creatively solve problems and make a
            positive impact. I’m eager to continue growing as a software
            engineer, pushing the boundaries of what’s possible, and
            contributing to projects that can make a difference.
          </p>
        </div>
      </div>

      <div className="contact-section">
        <h1 className="contact-header">Get in touch</h1>
        <div className="flex-links">
          <a href="https://www.linkedin.com/in/tatianastewart/" target="_blank">
            <Image className="link-img" src={linkedin}></Image>
          </a>
          <a href="https://github.com/TatianaS7" target="_blank">
            <Image className="link-img" src={github}></Image>
          </a>
        </div>
        <div className="resume">
          <a href="https://drive.google.com/uc?export=download&id=1cccVZ7s2DLqvP-NX_SZvtTgfh2YQHTnZ">
          <Button variant="success" className="resumeBtn" > Download Resume </Button>
          </a>
        </div>
        {/* <hr /> */}
        <ContactForm />
      </div>
    </div>
  );
}
