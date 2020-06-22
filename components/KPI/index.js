import React from "react";

const KPI = ({ value, label, isProfit }) => {
  return (
    <div className="d-flex flex-column p-3">
      <span className={isProfit ? "value value--profit mb-1" : "value mb-1"}>
        {value}
      </span>
      <span className="text--grey200">{label}</span>
    </div>
  );
};

export default KPI;
