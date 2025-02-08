import React from "react";
import GlitchText from "./GlitchText";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="main-container" style={styles.mainContainer}>
        {/* <div className="flexContainer" style={styles.flexContainer}> */}
          <div className="greetingContainer" style={styles.greetingContainer}>
            <p className="hello" style={styles.hello}>Hello</p>
            {/* <h1 style={styles.greeting}>
              I'm a{" "}
              <span style={styles.softwareEngineer}>
                Software
                <br />
                Engineer
              </span>
            </h1> */}
            <GlitchText text="I'm a Software Engineer" />
          </div>
        {/* </div> */}
      </div>
      
      <div className="quote-container" style={styles.quoteContainer}>
      <p className="quote" style={{ textAlign: "center", fontSize: "18pt", fontWeight: "bold" }}>
        <i>
          "I didnt come this far to only come this far." <br /> - Tom Brady
        </i>
      </p>
      </div>
    </>
  );
}

const styles = {
  // mainContainer: {
  //   display: "flex",
  //   alignItems: "center",
  //   height: "55vh",
  //   margin: "60px 85px 60px 60px",
  //   justifyContent: "center",
  //   gap: "5em",
  // },
  // flexContainer: {
  //   display: "flex",
  //   alignItems: "center",
  //   height: 55,
  //   margin: 60,
  //   justifyContent: "space-between",
  //   gap: 5,
  // },
  // hello: {
  //   fontWeight: 300,
  //   fontSize: "40pt",
  //   textTransform: "uppercase",
  //   textAlign: "center",
  // },
  // greeting: {
  //   fontSize: "55pt",
  //   textTransform: "uppercase",
  //   fontWeight: 800,
  //   textAlign: "center",
  //   fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  // },
  // greetingContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // softwareEngineer: {
  //   color: "black",
  //   textDecoration: "solid underline darkgreen",
  // },
  // quoteContainer: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "10vh",
  //   margin: "10px 85px 10px 60px",
  // }
};
