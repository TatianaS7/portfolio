import React from "react";
import { Fonts } from "../constants/Font";

export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.aboutSection}>
        <h1 style={{ ...styles.flex, ...Fonts.pageHeader }}>About Me</h1>
        <div style={{ ...Fonts.paragraph, ...styles.scrollDiv }}>
          <p>
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
              style={styles.ref}
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
      <div style={styles.skillsSection}>
        {/* <h3>Tech Stack</h3> */}

        <div style={styles.columns}>
          <div style={styles.column}>
            <div>
              <h5 style={styles.category}>Frontend</h5>
              {renderSkill("React", 70)}
              {renderSkill("Next.js", 50)}
              {renderSkill("JavaScript", 65)}
            </div>
            <br />

            <div>
              <h5 style={styles.category}>Backend</h5>
              {renderSkill("Python", 70)}
              {renderSkill("Node.js", 55)}
              {renderSkill("Express", 55)}
              {renderSkill("Flask", 75)}
            </div>
          </div>

          <div style={styles.column}>
            <div>
              <h5 style={styles.category}>Cloud</h5>
              {renderSkill("Azure", 40)}
            </div>

            <div>
              <h5 style={styles.category}>Testing</h5>
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
  <div style={styles.skill}>
    <p style={{ fontWeight: 500 }}>{name}</p>
    <progress value={value} max="100" style={styles.progress}></progress>
  </div>
);

const styles = {
  container: {
    display: "flex",
    height: "75vh",
    margin: "60px",
  },
  aboutSection: {
    flex: 2,
    display: "block",
  },
  skillsSection: {
    flex: 1,
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
    height: "100%",
    borderLeft: "1pt dashed grey",
    marginLeft: "1em",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginTop: 0,
  },
  ref: {
    fontWeight: "bold",
    color: "darkgreen",
  },
  category: {
    fontSize: "18pt",
    fontWeight: "bold",
  },
  columns: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "2em",
    flexWrap: "wrap",
    height: "100%",
    alignContent: "center",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "2em",
  },
  progress: {
    backgroundColor: "darkgreen",
    height: "10px",
    border: "1px solid grey",
    borderRadius: "5px",
  },
};
