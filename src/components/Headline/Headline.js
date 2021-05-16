import React from "react";
import "./Headline.scss";

const Headline = ({ title }) => {
  return (
    <div className="headline">
      <h3 className="headline__title">
        <span className="decoration">&</span> {title}
      </h3>
    </div>
  );
};

export default Headline;
