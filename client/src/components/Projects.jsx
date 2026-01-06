import React from "react";
import { Fonts } from "../constants/Font";
import ProjectCards from "./ProjectCards";
import "../styles/Projects.css";

export default function Projects({ projects }) {    
    return (
    <div className="projects">
      <h1 className="header" style={{ ...styles.flex, ...Fonts.pageHeader }}>My Projects</h1>

      <div className="projects-container">
        {projects && projects.map((project, idx) => ( 
            <ProjectCards key={idx} project={project} /> 
        ))}
      </div>

        </div>
    )
}

const styles = {
    flex: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        justifyContent: "space-evenly",
    },
}    