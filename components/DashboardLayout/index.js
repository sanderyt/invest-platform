import React from "react";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      <div className="row no-gutters dashboard">
        <div className="dashboard__sidebar col-md-2 d-flex justify-content-center">
          <ul className="dashboard__navigation">
            <DashboardMenuItem url="/dashboard">
              <i class="fas fa-bars"></i>
              Overzicht
            </DashboardMenuItem>
            <DashboardMenuItem url="/dashboard/investeringen">
              <i class="fas fa-money-bill-wave"></i>
              Investeringen
            </DashboardMenuItem>
            <DashboardMenuItem url="/dashboard/facturen">
              <i class="fas fa-coins"></i>
              Inkomsten
            </DashboardMenuItem>
            <DashboardMenuItem url="/dashboard/instellingen">
              <i class="fas fa-cog"></i>
              Instellingen
            </DashboardMenuItem>
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

const DashboardMenuItem = ({ children, url }) => {
  return (
    <Link href={url}>
      <a>
        <li>{children}</li>
      </a>
    </Link>
  );
};

export default DashboardLayout;
