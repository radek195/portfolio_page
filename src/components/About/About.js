import React from "react";
import "./About.scss";
import info from "../../images/icons/info.svg";
import myface from "../../images/myface.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div>
        <p className="about__text">
          My name is Radek and I find my peace at programming. In this section I
          would like to tell you something about me.
        </p>
        <p className="about__text">
          My journey in programming started at{" "}
          <a
            href="https://www.freecodecamp.org/"
            style={{ textDecoration: "underline" }}
            target="_blank"
            rel="noreferrer"
          >
            freecodecamp.org.
          </a>{" "}
          After completing sections about HTML and CSS I decided that its time
          to <span className="decoration">dive</span> in!
        </p>
        <p className="about__text">
          Apart from my tech skills I am very comunicative person with strong
          ability to work both in group and solo. I can give feedback and also
          accept criticism.
        </p>
        <p className="about__text">
          I am hardworking self-taught coder looking for <br />
          <span className="decoration">Junior Front-end Developer</span>{" "}
          position.
        </p>
        <img src={info} alt="info icon" />
      </div>
      <img className="about__image" src={myface} alt="my face" />
    </section>
  );
};

export default About;
