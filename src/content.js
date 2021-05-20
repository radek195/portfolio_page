import html from "./images/icons/html.svg";
import js from "./images/icons/js.svg";
import react from "./images/icons/react.svg";
import sass from "./images/icons/sass.svg";
import css from "./images/icons/css.svg";
import redux from "./images/icons/redux.svg";
import git from "./images/icons/git.svg";
import figma from "./images/icons/figma.svg";
import code from "./images/icons/code.svg";
import npm from "./images/icons/npm.svg";
import java from "./images/icons/java.svg";
import mysql from "./images/icons/mysql.svg";
import firebase from "./images/icons/firebase.svg";

export const projectsArray = [
  {
    title: "Gamebrary",
    description: "Library made for browsing video games.",
    stack: [react, sass],
    code: "https://github.com/radek195/games",
    demo: "https://radek195.github.io/games/",
  },
  {
    title: "Food Idea",
    description: "Website created for searching food recipes. ",
    stack: [html, sass, js],
    code: "https://github.com/radek195/food_idea",
    demo: "https://radek195.github.io/food_idea/",
  },
];

export const SkillsArray = [
  {
    icon: html,
    title: "HTML5",
    keywords: ["accessibility", "RWD"],
  },
  {
    icon: css,
    title: "CSS",
    keywords: ["@media", "transition", "@keyframes"],
  },
  {
    icon: sass,
    title: "Sass",
    keywords: ["variables", "@mixin", "BEM"],
  },
  {
    icon: js,
    title: "JavaScript",
    keywords: ["es6", "Array.prototype", "async/await"],
  },
  {
    icon: react,
    title: "React",
    keywords: ["hooks", "components", "react router"],
  },
  {
    icon: redux,
    title: "Redux",
    keywords: ["actions", "redux thunk", "reducer"],
  },
];

export const ToolsArray = [
  {
    icon: git,
    title: "Git",
    keywords: ["push", "commit", "init", "merge"],
  },
  {
    icon: figma,
    title: "Figma",
    keywords: ["svg", "layers", "design", "frames"],
  },
  {
    icon: code,
    title: "VS Code",
    keywords: ["emmet", "explorer"],
  },
  {
    icon: npm,
    title: "npm",
  },
];

export const BackArray = [
  {
    title: "Java",
    icon: java,
  },
  {
    title: "MySQL",
    icon: mysql,
  },
  {
    title: "Firebase",
    icon: firebase,
  },
];
