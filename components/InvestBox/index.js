import React from "react";

import ProgressBar from "../ProgressBar";

const InvestBox = ({ websiteBid, children }) => {
  return (
    <div className="investbox d-flex flex-column justify-content-around">
      <div className="d-flex align-items-center">
        <h2>
          <i class="fas fa-tag"></i>€{websiteBid},-
        </h2>
        <i class="fas fa-info-circle text--grey200 ml-3"></i>
      </div>
      {children}
    </div>
  );
};

export default InvestBox;
