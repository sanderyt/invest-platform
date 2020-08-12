import React from "react";

import { refactorAmount } from "../../utils/functions";

const ProgressBar = ({ progressAmount, targetAmount, numberOfInvestors }) => {
  const progressRatio = (progressAmount, targetAmount) => {
    return Math.floor((progressAmount / targetAmount) * 100);
  };

  return (
    <div className="progress  p-2">
      <div className="progress__info d-flex justify-content-between mb-2">
        <span>€{refactorAmount(progressAmount)},- opgehaald</span>
        <span className="text--grey400">
          {numberOfInvestors} investeerder{numberOfInvestors !== 1 && "s"}
        </span>
      </div>
      <div className="progress__bar">
        <div
          className="progressbar__bar progress__bar--active"
          style={{ width: `${progressRatio(progressAmount, targetAmount)}%` }}
        ></div>
      </div>
      <div className="progress_goal d-flex justify-content-between mt-2">
        <span className="text--grey400">
          {progressRatio(progressAmount, targetAmount)}% van het doelbedrag
        </span>
        <span className="text--grey400"></span>
      </div>
    </div>
  );
};

export default ProgressBar;
