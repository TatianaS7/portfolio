import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import StackButtons from "./StackButtons";
import github from "../../assets/github.png";

export default function ProjectCards({ project, idx }) {
  return (
    <Card className="bg-white text-black" key={idx} style={{ width: "45em", border: "solid 2pt black" }}>
        <Card.Header style={{backgroundColor: "white"}}>
          <div style={styles.flex}>
          <p style={styles.title}>{project.title}</p>

          <div style={styles.flex}>
            <a href={project.github_link} target="_blank">
            <img src={github} style={{height: "2em", width: "2em", margin: "5px"}} />
            </a>

            {project.deployed_link && (
            <a href={project.deployed_link} target="_blank">
              <Button style={styles.liveBtn}>View Site</Button>
            </a>  
            )}
          </div>
          </div>
          <p style={styles.description}>{project.description}</p>

        </Card.Header>
      <Card.Body>
        <img src={project.image} style={styles.imageContainer} />
      </Card.Body>

      <Card.Footer style={styles.stack}>
      {project.technologies.map((stack, idx) => (
            <StackButtons key={idx} stack={stack} />
          ))}
      </Card.Footer>
    </Card>
  );
}

const styles = {
    title: {
    fontSize: "17pt",
    textDecoration: "none",
    color: "black",
    fontWeight: "800",
    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  },
  description: {
    margin: "5px 0",
    height: "4em",
    overflowY: "auto",
    padding: "2pt",
    fontSize: "14pt",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    height: "17em",
    width: "100%",
    overflowY: "auto",
    marginBottom: "1em",
  },
  stack: {
    display: "flex",
    justifyContent: "center",
    height: "auto",
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "5px",
  },
  flex: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  liveBtn: {
    backgroundColor: "darkgreen",
    border: "none",
  }
};
