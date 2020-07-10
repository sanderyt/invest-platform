import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row dashboard">
        <div className="dashboard__sidebar col-md-2 d-flex justify-content-center p-2">
          <ul>
            <li>Overzicht</li>
            <li>Investeringen</li>
            <li>Facturen</li>
            <li>Instellingen</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="dashboard__content col-md-10 d-flex flex-column align-items-center">
          <div className="container-fluid">
            <div className="row">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
