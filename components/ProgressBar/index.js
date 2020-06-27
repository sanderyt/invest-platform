import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress  p-2">
      <div className="progress__info d-flex justify-content-between mb-2">
        <span>€34.250,- opgehaald</span>
        <span className="text--grey400">34 investeerders</span>
      </div>
      <div className="progress__bar">
        <div
          className="progressbar__bar progress__bar--active"
          style={{ width: progress }}
        ></div>
      </div>
      <div className="progress_goal d-flex justify-content-between mt-2">
        <span className="text--grey400">77% van het bedrag</span>
        <span className="text--grey400">nog 34 dagen</span>
      </div>
    </div>
  );
};

export default ProgressBar;
