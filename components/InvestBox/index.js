import React from "react";

const InvestBox = ({ targetAmount, children }) => {
  return (
    <div className="investbox d-flex flex-column justify-content-around">
      <div className="d-flex align-items-center">
        <h2>
          <i class="fas fa-tag"></i>€{targetAmount},-
        </h2>
        <i class="fas fa-info-circle text--grey200 ml-3"></i>
      </div>
      {children}
    </div>
  );
};

export default InvestBox;
