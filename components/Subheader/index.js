import React from "react";

const Subheader = ({ subtitle, description }) => {
  return (
    <div className="subheader d-flex justify-content-center align-items-center container-fluid">
      <div className="subheader__overlay"></div>
      <div className="subheader__title row d-flex flex-column justify-content-center align-items-center p-3">
        <h2>{subtitle}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Subheader;
