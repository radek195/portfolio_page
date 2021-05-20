import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";

import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Headline from "./Headline/Headline";
import Front from "./Front/Front";
import Back from "./Back/Back";
import About from "./About/About";
import Tools from "./Tools/Tools";
import Contact from "./Contact/Contact";

import "./App.scss";

const App = () => {
  const main = useRef(null);

  useEffect(() => {
    TweenMax.from(main.current, 0.4, {
      opacity: 0,
      y: -10,
      delay: 1.7,
    });
  });

  return (
    <div className="app">
      <Hero />

      <main className="app__container" ref={main}>
        <Headline title="projects" />
        <Projects />
        <Headline title="skills" />
        <Front />
        <Back />
        <Tools />

        <Headline title="about" />
        <About />
      </main>

      <footer className="container">
        <Contact />
      </footer>
    </div>
  );
};

export default App;
