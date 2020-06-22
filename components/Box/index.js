import React from "react";

const Box = ({ children }) => {
  return (
    <div className="box d-flex flex-column align-items-center">{children}</div>
  );
};

export default Box;
