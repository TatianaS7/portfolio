import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router";

export default function Navigation() {
    return (
        <div style={styles.navbar}>
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="primary" style={styles.homeBtn}>Tatiana <span style={styles.span}>Stewart</span></Button>
                </Link>
            </div>

            <div>
                <Button variant="primary" style={styles.navbarBtn}>
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
                </Button>
                <Button variant="primary" style={styles.navbarBtn}>
                <Link to="/experience" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</Link>
                </Button>
                <Button variant="primary" style={styles.navbarBtn}>
                <Link to="/projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</Link>
                </Button>
            </div>
        </div>
    )
}

const styles = {
    navbar: {
        padding: '25px',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid lightgrey'
    },
    navbarBtn: {
        borderStyle: 'none',
        background: 'none',
        color: 'black',
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '13pt'
    },
    homeBtn: {
        textDecoration: 'none',
        fontSize: '25pt',
        fontWeight: 800,
        borderStyle: 'none',
        background: 'none',
        color: 'black',
        cursor: 'pointer',
        textTransform: 'uppercase'
    },
    span: {
        color: 'darkgreen'
    }
}