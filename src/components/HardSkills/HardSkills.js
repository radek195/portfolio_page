import React, { useState, useEffect, useRef } from "react";
import SpinnerWheel from "./SpinnerWheel";
import { SkillsArray as arr } from "../../content";
import "./HardSkills.scss";

// https://codesandbox.io/s/brave-faraday-g9089?file=/src/App.js

const HardSkills = () => {
  const [rotation, setRotation] = useState(0);
  const keywords = useRef(null);

  const interval = 3;
  const displayAngle = 360 / arr.length;
  const wheelSize = 220;
  const current = (rotation / displayAngle) % arr.length;

  const mapKeywords = (arr) => {
    return arr.map((item) => {
      return <div key={item}>{item}</div>;
    });
  };

  useEffect(() => {
    setTimeout(() => {
      keywords.current.style.animation = "";
      setRotation(rotation + displayAngle);
    }, interval * 1000);

    keywords.current.style.animation = `fadeKeywords ${interval}s linear`;
  }, [rotation, displayAngle]);

  return (
    <section className="hardskills" id="skills">
      <div className="hardskills__text">
        <h4 className="hardskills__description">
          When it comes to programming these are my most important skills:
        </h4>
        <div ref={keywords} className="hardskills__keywords">
          {mapKeywords(arr[current].keywords)}
        </div>
      </div>
      <div className="hardskills__spinner">
        <SpinnerWheel
          items={arr}
          size={wheelSize}
          rotation={rotation}
          displayAngle={displayAngle}
        />
      </div>
    </section>
  );
};

export default HardSkills;
