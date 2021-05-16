import React from "react";
import "./HardSkills.scss";

const SpinnerWheel = ({ items, size, rotation, displayAngle }) => {
  const tiles = items.map((item, index) => {
    return (
      <div
        key={index}
        style={{
          width: "40px",
          height: "62px",
          position: "absolute",
          left: "50%",
          transformOrigin: `center ${size / 2}px`,
          transform: `translateX(-50%) rotate(${-displayAngle * index}deg)`,
        }}
      >
        <div
          className="hardskills__item"
          style={{
            backgroundImage: `url(${item.icon})`,
            transform: `translateY(-50%) rotate(${
              -rotation + displayAngle * index
            }deg)`,
            transition: "ease 0.9s",
          }}
        ></div>
      </div>
    );
  });

  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
        transition: "ease 0.9s",
      }}
    >
      {tiles}
    </div>
  );
};

export default SpinnerWheel;
