import React from "react";

const Hamburger = ({ clickHandler, isOpen }) => {
  const hamburger =
    "hamburger d-flex flex-column align-items-center justify-content-center";
  return (
    <div
      className={isOpen ? `${hamburger} open` : `${hamburger}`}
      onClick={clickHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
