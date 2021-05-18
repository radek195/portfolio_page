import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Hero.scss";

const Hero = () => {
  const [navigation, setNavigation] = useState(true);
  const hero = useRef();
  const header = useRef();
  const list = useRef();
  const mobile = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (
        (list.current && list.current.contains(event.target)) ||
        (mobile.current && mobile.current.contains(event.target))
      ) {
        return;
      }
      setNavigation(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const toggleNavigation = () => {
    navigation ? setNavigation(false) : setNavigation(true);
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  useLayoutEffect(() => {
    let heroHeight = hero.current.getBoundingClientRect().height;

    TweenMax.from(hero.current, 1.7, {
      y: -1 * heroHeight,
      ease: Power3.easeOut,
    });

    TweenMax.from(header.current, 0.7, {
      y: 10,
      opacity: 0,
      delay: 1.2,
    });
    TweenMax.staggerFrom(
      list.current.children,
      0.6,
      { opacity: 0, y: -10, delay: 1.7 },
      0.15
    );
  }, []);

  return (
    <section className="hero" ref={hero}>
      <nav className="navigation">
        <ul
          ref={list}
          className={`navigation__list ${
            navigation ? "navigation__list--open" : ""
          }`}
        >
          <li className="navigation__item">
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="decoration">&</span> projects
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="skills"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="decoration">&</span> skills
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="decoration">&</span> about
            </Link>
          </li>
          <li
            className="navigation__item"
            onClick={() => {
              scrollToBottom();
            }}
          >
            <span
              onClick={() => {
                toggleNavigation();
              }}
            >
              <span className="decoration">&</span> contact
            </span>
          </li>
        </ul>
        <div
          ref={mobile}
          className={`navigation__mobile ${
            navigation ? "navigation__mobile--open" : ""
          }`}
          onClick={toggleNavigation}
        >
          <i className="fas fa-arrow-left"></i>
        </div>
      </nav>
      <header className="hero__header" ref={header}>
        <p className="hero__title">Hello,</p>
        <h1 className="hero__title">my name is Radek.</h1>
        <h2 className="hero__title">I am a Front-end developer.</h2>
        <div
          onClick={() => {
            scrollToBottom();
          }}
          className="hero__button"
        >
          CONTACT ME
        </div>
      </header>
    </section>
  );
};

export default Hero;
