import React from "react";

import Spinner from "../Spinner";

const Button = ({ children, isLoading, clickHandler }) => {
  return (
    <button
      className="btn btn--primary d-flex align-items-center justify-content-center m-4"
      onClick={clickHandler}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
