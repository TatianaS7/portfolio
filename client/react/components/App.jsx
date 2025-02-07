import React, { useState, useEffect } from "react";

import axios from "axios";
import apiURL from "../api"

// Import Components
import Home from "./Home";
import Navigation from "./Navigation";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Experience from "./Experience";
import Projects from "./Projects";

import apiURL from "../api";
import axios from "axios";

function App() {
    const [projects, setProjects] = useState([]);

    // Fetch Projects
    async function fetchProjects() {
        try {
            const res = await axios.get(`${apiURL}/api/projects/all`);
            setProjects(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="experience" element={<Experience />} />
                <Route path="projects" element={<Projects projects={projects}/>} />
            </Routes>
        </Router>
    )
}

export default App;