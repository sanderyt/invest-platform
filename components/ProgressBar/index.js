import React from "react";

const ProgressBar = ({ progressBid, websiteBid, numberOfInvestors }) => {
  const progressRatio = (progressBid, websiteBid) => {
    return (progressBid / websiteBid) * 100;
  };

  return (
    <div className="progress  p-2">
      <div className="progress__info d-flex justify-content-between mb-2">
        <span>€{progressBid},- opgehaald</span>
        <span className="text--grey400">{numberOfInvestors} investeerders</span>
      </div>
      <div className="progress__bar">
        <div
          className="progressbar__bar progress__bar--active"
          style={{ width: progressRatio(progressBid, websiteBid) }}
        ></div>
      </div>
      <div className="progress_goal d-flex justify-content-between mt-2">
        <span className="text--grey400">
          {progressRatio(progressBid, websiteBid)}% van het doelbedrag
        </span>
        <span className="text--grey400">nog 34 dagen</span>
      </div>
    </div>
  );
};

export default ProgressBar;
