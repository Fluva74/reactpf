import React, { useEffect, useState } from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  const words = [
    "Creative",
    "Determined",
    "Dependable",
    "Communicative",
    "Social",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((wordIndex) => (wordIndex + 1) % words.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="heroContainer">
      <div className="subTitleContainer">
        <h3 className="subTitleText">
          A&nbsp;&nbsp;&nbsp;
          <Typewriter
            options={{
              strings: words,
              autoStart: true,
              loop: true,
              cursor: "|",
              delay: 100,
              deleteSpeed: 30,
              pauseFor: 2200,
            }}
          />
          &nbsp;Developer
        </h3>
      </div>
      <div className="titleContainer">
        <h1 className="siteTitle">IDEATION, INNOVATION, DETERMINATION</h1>
      </div>
      <hr id="workLink" />
    </div>
  );
}

export default Hero;
