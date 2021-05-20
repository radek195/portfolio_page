import React, { useLayoutEffect, useRef } from "react";
import "./Back.scss";
import { BackArray as arr } from "../../content";
import { TweenMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Back = () => {
  const javaIcon = useRef();
  const javaTxt = useRef();
  const sqlIcon = useRef();
  const sqlTxt = useRef();
  const fireIcon = useRef();
  const fireTxt = useRef();

  let array = [javaIcon, javaTxt, sqlTxt, sqlIcon, fireIcon, fireTxt];

  useLayoutEffect(() => {
    const animateOnScroll = (elem) => {
      let direction;
      if (elem.classList.contains("fromLeft")) {
        direction = -1;
      } else {
        direction = 1;
      }
      return TweenMax.fromTo(
        elem,
        0.6,
        { opacity: 0, x: direction * 10 },
        { opacity: 1, x: 0 },
        0.2
      );
    };
    array.forEach((elem) => {
      ScrollTrigger.create({
        animation: animateOnScroll(elem.current),
        trigger: elem.current,
        start: "top 65%",
      });
    });
  });

  return (
    <section className="back" id="skills">
      <div className="back__container">
        <h4 className="back__description">
          These are my <span className="decoration">back end</span> skills.
        </h4>
        <ul className="back__list">
          <li className="back__item">
            <div ref={javaIcon} className="back__left fromLeft">
              <img className="back__icon" src={arr[0].icon} alt="java" />
              <p className="back__title">{arr[0].title}</p>
            </div>
            <div ref={javaTxt} className="back__right fromRight">
              I can use Java for object-oriented programming in the area of
              algorithms, concurrent programming, creating desktop layouts with
              JavaFX, web servlets and unit testing in JUnit.
            </div>
          </li>
          <li className="back__item">
            <div className="back__left fromRight" ref={sqlIcon}>
              <img className="back__icon" src={arr[1].icon} alt="mysql" />
              <p className="back__title">{arr[1].title}</p>
            </div>
            <div className="back__right fromLeft" ref={sqlTxt}>
              I'm no stranger to composing SQL queries. I also have basics in
              connecting to database, creating tables and making requests.
            </div>
          </li>
          <li className="back__item">
            <div className="back__left fromLeft" ref={fireIcon}>
              <img className="back__icon" src={arr[2].icon} alt="firebase" />
              <p className="back__title">{arr[2].title}</p>
            </div>
            <div className="back__right fromRight" ref={fireTxt}>
              I am currently building a project which use Firebase. I have basic
              knowledge on how to authenticate user and how to store data on
              Firestore.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Back;
