import React from "react";

const Overview = ({ children }) => {
  return (
    <div className="list container">
      <div className="list__heading row d-flex">
        <div className="col-md-3 d-flex align-items-center">Website</div>
        <div className="col-md-3 d-flex align-items-center">Niche</div>
        <div className="col-md-2 d-flex align-items-center">Winst p/m</div>
        <div className="col-md-2 d-flex align-items-center">Doelbedrag</div>
        <div className="col-md-2 d-flex align-items-center">Inleg</div>
      </div>
      {children}
    </div>
  );
};

export default Overview;
