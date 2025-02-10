import React from "react";
import { Fonts } from "../constants/Font";
import "../styles/About.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutSection">
        <h1 className="header" style={Fonts.pageHeader }>About Me</h1>
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
      <div className="skillsSection">
        <div className="columns" >
          <div className="column">
            <div>
              <h5 className="category">Frontend</h5>
              {renderSkill("React", 70)}
              {renderSkill("Next.js", 50)}
              {renderSkill("JavaScript", 65)}
            </div>
            <br />

            <div>
              <h5 className="category">Backend</h5>
              {renderSkill("Python", 70)}
              {renderSkill("Node.js", 55)}
              {renderSkill("Express", 55)}
              {renderSkill("Flask", 75)}
            </div>
          </div>

          <div className="column">
            <div>
              <h5 className="category">Cloud</h5>
              {renderSkill("Azure", 40)}
            </div>

            <div>
              <h5 className="category">Testing</h5>
              {renderSkill("Jest", 55)}
              {renderSkill("Cypress", 35)}
              {renderSkill("Pytest", 55)}
              {renderSkill("Playwright", 30)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderSkill = (name, value) => (
  <div className="skill">
    <p style={{ fontWeight: 500 }}>{name}</p>
    <progress className="progress" value={value} max="100"></progress>
  </div>
);