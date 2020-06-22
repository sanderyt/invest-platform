import React from "react";

import ProgressBar from "../ProgressBar";

const InvestBox = ({ clickHandler }) => {
  return (
    <div className="investbox d-flex flex-column justify-content-around">
      <div className="d-flex align-items-center">
        <h2>
          <i class="fas fa-tag"></i>€52.000,-
        </h2>
        <i class="fas fa-info-circle text--grey200 ml-3"></i>
      </div>
      <ProgressBar progress="90%" />
      <button className="btn btn--cta btn--lg" onClick={clickHandler}>
        <i class="fas fa-coins"></i>Investeer
      </button>
    </div>
  );
};

export default InvestBox;
