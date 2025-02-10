import React from "react";
import { Fonts } from "../constants/Font";
import ProjectCards from "./ProjectCards";

export default function Projects({ projects }) {    
    return (
    <div style={{ height: "65vh", margin: "60px" }}>
      <h1 style={{ ...styles.flex, ...Fonts.pageHeader }}>My Projects</h1>

      <div style={styles.container}>
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
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "2em",
        overflowY: "auto",
        height: "65vh",
        padding: "10px",
    }
}    