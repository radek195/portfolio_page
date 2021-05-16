import React from "react";
import "./Contact.scss";

import gh from "../../images/icons/github.svg";
import linkedin from "../../images/icons/linkedin.svg";
import envelope from "../../images/icons/envelope.svg";

const Contact = () => {
  return (
    <footer className="contact">
      <div className="app__container">
        <h4 className="contact__title">
          Let's get <span className="decoration">in</span> touch.
        </h4>
        <nav className="contact__nav">
          <ul className="contact__list">
            <li>
              <a
                href="https://github.com/radek195"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <img src={gh} alt="github" className="contact__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rados%C5%82aw-parol-15733a1a1/"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <img src={linkedin} alt="linkedin" className="contact__icon" />
              </a>
            </li>
            <li>
              <a
                href="mailto:parol.rad@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact__link"
              >
                <img src={envelope} alt="envelope" className="contact__icon" />
              </a>
            </li>
          </ul>
        </nav>
        <p className="contact__copy">© 2021 Radosław Parol</p>
      </div>
    </footer>
  );
};

export default Contact;
