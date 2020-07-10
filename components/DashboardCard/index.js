import React from "react";

const DashboardCard = ({ children }) => {
  return (
    <div className="dashboard-card col-md-5 d-flex flex-column align-items-center justify-content-center">
      {children}
    </div>
  );
};

export default DashboardCard;
