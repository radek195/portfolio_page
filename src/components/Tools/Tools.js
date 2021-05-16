import React, { useRef, useLayoutEffect } from "react";
import { TweenMax, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Tools.scss";
import { ToolsArray as arr } from "../../content";

gsap.registerPlugin(ScrollTrigger);

const Tools = () => {
  const tools = useRef();

  useLayoutEffect(() => {
    const animateOnScroll = TweenMax.staggerFromTo(
      tools.current.children,
      0.6,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0 },
      0.2
    );

    ScrollTrigger.create({
      animation: animateOnScroll,
      trigger: tools.current.children,
      start: "top 65%",
    });
  }, []);

  const renderedTools = arr.map((item) => {
    return (
      <div key={item.title} className="tools__item">
        <img className="tools__img" src={item.icon} alt={item.title} />
        <div className="tools__title">{item.title}</div>
      </div>
    );
  });

  return (
    <div className="tools">
      <div className="tools__container" ref={tools}>
        {renderedTools}
      </div>
      <div className="tools__description">
        Tools are very important things for developers. Here are my favorite
        tools that I use while creating my projects.
      </div>
    </div>
  );
};

export default Tools;
