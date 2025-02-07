import React from "react";

export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.flexContainer}>
          <div>
            <p style={styles.hello}>Hello</p>
            <h1 style={styles.greeting}>
              I'm a{" "}
              <span style={styles.softwareEngineer}>
                Software
                <br />
                Engineer
              </span>
            </h1>
          </div>
        </div>
      </div>

      <p style={{ textAlign: "center", fontSize: "18pt", fontWeight: "bold" }}>
        <i>"I didnt come this far to only come this far." <br /> - Tom Brady</i>
      </p>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    height: "55vh",
    margin: "60px 85px 60px 60px",
    justifyContent: "center",
    gap: "5em",
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    height: 55,
    margin: 60,
    justifyContent: "space-between",
    gap: 5,
  },
  hello: {
    fontWeight: 300,
    fontSize: "40pt",
    textTransform: "uppercase",
    textAlign: "center",
  },
  greeting: {
    fontSize: "55pt",
    textTransform: "uppercase",
    fontWeight: 800,
    textAlign: "center",
    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  },
  softwareEngineer: {
    color: "black",
    textDecoration: "solid underline darkgreen",
  },
  quoteContainer: {
    width: "40em",
    alignSelf: "center",
    marginTop: "30px",
  },
  quote: {
    backgroundColor: "white",
    padding: "20px",
    height: "auto",
    border: "black solid",
    borderRadius: "5px",
    fontWeight: "bold",
    textAlign: "right",
    fontSize: "25pt",
    boxShadow: "rgb(191, 204, 191) 15pt 15pt",
    lineHeight: "2.5em",
    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  },
};
