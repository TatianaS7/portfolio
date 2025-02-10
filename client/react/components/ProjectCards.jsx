import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import StackButtons from "./StackButtons";
import github from "../../assets/github.png";
import "../styles/ProjectCards.css";

export default function ProjectCards({ project, idx }) {
  return (
    <Card id="card-div" className="bg-white text-black" key={idx}>
        <Card.Header style={{backgroundColor: "white"}}>
          <div className="card-flex">
          <p className="project-title">{project.title}</p>

          <div className="card-flex">
            <a href={project.github_link} target="_blank">
            <img className="github" src={github} />
            </a>

            {project.deployed_link && (
            <a href={project.deployed_link} target="_blank">
              <Button className="liveBtn">Live</Button>
            </a>  
            )}
          </div>
          </div>
          <p className="project-description">{project.description}</p>

        </Card.Header>
      <Card.Body className="card-body">
        <img className="imageContainer" src={project.image} />
      </Card.Body>

      <Card.Footer className="stack">
      {project.technologies.map((stack, idx) => (
            <StackButtons key={idx} stack={stack} />
          ))}
      </Card.Footer>
    </Card>
  );
}
