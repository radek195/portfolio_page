import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import SpinnerWheel from "./SpinnerWheel";
import { SkillsArray as arr } from "../../content";
import "./Front.scss";
import { TweenMax } from "gsap";
// https://codesandbox.io/s/brave-faraday-g9089?file=/src/App.js

const Front = () => {
  const [rotation, setRotation] = useState(0);
  let [size, setSize] = useState(220);
  const keywords = useRef(null);
  const spinner = useRef(null);

  const interval = 3;
  const displayAngle = 360 / arr.length;
  const current = (rotation / displayAngle) % arr.length;

  const mapKeywords = (arr) => {
    return arr.map((item) => {
      return <div key={item}>{item}</div>;
    });
  };

  useEffect(() => {
    TweenMax.fromTo(
      keywords.current,
      0.45,
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );

    setTimeout(() => {
      TweenMax.to(keywords.current, 0.45, {
        y: 10,
        opacity: 0,
        delay: 2.8,
      });
      setRotation(rotation + displayAngle);
    }, interval * 1000);
  }, [rotation, displayAngle]);

  useLayoutEffect(() => {
    if (window.innerWidth > 1400) {
      setSize(280);
    }
    if (window.innerWidth < 1400) {
      setSize(220);
    }
  });

  return (
    <section className="front" id="skills">
      <div className="front__text">
        <h4 className="front__description">
          These are my most important{" "}
          <span className="decoration">technologies</span> that I use for
          creating websites:
        </h4>
        <div ref={keywords} className="front__keywords">
          {mapKeywords(arr[current].keywords)}
        </div>
      </div>
      <div ref={spinner} className="front__spinner">
        <SpinnerWheel
          items={arr}
          size={size}
          rotation={rotation}
          displayAngle={displayAngle}
        />
      </div>
    </section>
  );
};

export default Front;
