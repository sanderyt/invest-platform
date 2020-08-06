import React from "react";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters dashboard">
        <div className="dashboard__sidebar col-md-2 d-flex justify-content-center">
          <ul className="dashboard__navigation">
            <DashboardMenuItem label="Overzicht" url="/dashboard" />
            <DashboardMenuItem
              label="Investeringen"
              url="/dashboard/investeringen"
            />
            <DashboardMenuItem label="Inkomsten" url="/dashboard/facturen" />
            <DashboardMenuItem
              label="Instellingen"
              url="/dashboard/instellingen"
            />
            <DashboardMenuItem label="Contact" url="/dashboard/contact" />
          </ul>
        </div>
        <div className="dashboard__content col-md-10 d-flex flex-column align-items-center">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardMenuItem = ({ label, url }) => {
  return (
    <Link href={url}>
      <a>
        <li>{label}</li>
      </a>
    </Link>
  );
};

export default DashboardLayout;
