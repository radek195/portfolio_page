import React from "react";
import "./Projects.scss";
import { projectsArray } from "../../content";

const Projects = () => {
  const renderProjects = projectsArray.map((project) => {
    return (
      <div className="card" key={project.title}>
        <h3 className="card__title">{project.title}</h3>
        <h5 className="card__description">{project.description}</h5>

        <div className="card__stack">
          <p className="card__technology">Made with:</p>
          {project.stack.map((tech, index) => {
            return (
              <div
                style={{ backgroundImage: `url(${tech})` }}
                className="tech"
                key={index}
              ></div>
            );
          })}
        </div>
        <div className="github">
          <div className="github__item">
            <a href={project.demo} target="_blank" rel="noreferrer">
              <i className="far fa-eye"></i>
              <p>Demo</p>
            </a>
          </div>
          <div className="github__item">
            <a href={project.code} target="_blank" rel="noreferrer">
              <i className="fas fa-code"></i>
              <p>Code</p>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="projects" id="projects">
      <div className="container__content">
        <div className="projects__container">{renderProjects}</div>
      </div>
    </section>
  );
};

export default Projects;
