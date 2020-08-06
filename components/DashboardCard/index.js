import React from "react";

const DashboardCard = ({ children, title }) => {
  return (
    <div className="dashboard-card col-md-5 d-flex flex-column align-items-center justify-content-center">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default DashboardCard;
