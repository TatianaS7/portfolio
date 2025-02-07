import React from "react";
import { useState, useEffect, useCallback } from "react";


export default function GlitchText({ text }) {
  const [displayBinary, setDisplayBinary] = useState(false);
  const [binaryText, setBinaryText] = useState("");

  const generateBinary = useCallback(() => {
    return text
      .split("")
      .map(() => (Math.random() > 0.5 ? "1" : "0"))
      .join("");
  }, [text]);

  const updateSingleBinaryDigit = useCallback(() => {
    setBinaryText((prev) => {
      const index = Math.floor(Math.random() * prev.length);
      return (
        prev.substring(0, index) +
        (Math.random() > 0.5 ? "1" : "0") +
        prev.substring(index + 1)
      );
    });
  }, []);

  useEffect(() => {
    let interval;

    const switchToBinary = () => {
      setBinaryText(generateBinary());
      setDisplayBinary(true);

      // Rapidly update individual binary digits
      interval = setInterval(updateSingleBinaryDigit, 10);

      // Switch back to main text after 2 seconds
      setTimeout(() => {
        setDisplayBinary(false);
        clearInterval(interval);
      }, 2000);
    };

    const mainInterval = setInterval(switchToBinary, 5000);

    return () => {
      clearInterval(mainInterval);
      if (interval) clearInterval(interval);
    };
  }, [generateBinary, updateSingleBinaryDigit]);

  return (
    <div style={styles.container}>
        {displayBinary ? (
          <h1 style={styles.binaryText}>{binaryText}</h1>
        ) : (
          <h1 style={styles.greeting}>
            I'm a{" "}
            <span style={styles.softwareEngineer}>
              Software
              <br />
              Engineer
            </span>
          </h1>
        )}
    </div>
  );
};

const styles = {
    greeting: {
        fontSize: "55pt",
        textTransform: "uppercase",
        fontWeight: 800,
        textAlign: "center",
        fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        color: "black",
    },
    softwareEngineer: {
        color: "black",
        textDecoration: "solid underline darkgreen",
    },
    binaryText: {
        fontSize: "55pt",
        textTransform: "uppercase",
        fontWeight: 100,
        textAlign: "center",
        // fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        color: "darkgreen",
        whiteSpace: "normal",
        wordBreak: "break-word",
        // backgroundColor: "black",
        textShadow: "0 0 2px #00FF00, 0 0 4px #00FF00, 0 0 6px darkgreen, 0 0 8px darkgreen", // Glow effect
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        overflow: "hidden",
        height: "20em",
        width: "30em",
    },
    // text: {
    //     fontSize: "55pt",
    //     fontWeight: "bold",
    //     color: "#000",
    //     transition: "color 0.3s ease",
    // }    
}
