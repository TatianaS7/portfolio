import React from "react";
import { useState, useEffect, useCallback } from "react";
import "../styles/GlitchText.css";


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

      // Switch back to main text after 1 second
      setTimeout(() => {
        setDisplayBinary(false);
        clearInterval(interval);
      }, 1000);
    };

    const mainInterval = setInterval(switchToBinary, 4000);

    return () => {
      clearInterval(mainInterval);
      if (interval) clearInterval(interval);
    };
  }, [generateBinary, updateSingleBinaryDigit]);

  return (
    <>
        {displayBinary ? (
          <h1 className="binaryText" >{binaryText}</h1>
        ) : (
          <h1 className="div">
            <span className="greeting">I'm a{" "}</span>
            <span className="software-engineer" >
              Software
              <br />
              Engineer
            </span>
          </h1>
        )}
    </>
  );
};