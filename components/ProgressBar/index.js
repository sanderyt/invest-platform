import React from "react";

const ProgressBar = ({ progressAmount, targetAmount, numberOfInvestors }) => {
  const progressRatio = (progressAmount, targetAmount) => {
    return (progressAmount / targetAmount) * 100;
  };

  return (
    <div className="progress  p-2">
      <div className="progress__info d-flex justify-content-between mb-2">
        <span>€{progressAmount},- opgehaald</span>
        <span className="text--grey400">{numberOfInvestors} investeerders</span>
      </div>
      <div className="progress__bar">
        <div
          className="progressbar__bar progress__bar--active"
          style={{ width: progressRatio(progressAmount, targetAmount) }}
        ></div>
      </div>
      <div className="progress_goal d-flex justify-content-between mt-2">
        <span className="text--grey400">
          {progressRatio(progressAmount, targetAmount)}% van het doelbedrag
        </span>
        <span className="text--grey400">nog 34 dagen</span>
      </div>
    </div>
  );
};

export default ProgressBar;
