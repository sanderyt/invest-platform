import React from "react";
import { ProtectedPage } from "../../components/ProtectedPage";

import Layout from "../../components/Layout";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardCard from "../../components/DashboardCard";

const Dashboard = () => {
  return (
    <Layout>
      <DashboardLayout>
        <DashboardCard>
          <p>
            Laat hier KPI's zien mbt investeringen, ROI, hoeveel al verdiend
            etc...
            https://nl.freepik.com/premium-psd/heyinz-invoice-admin-dashboard-ui-kit_6960231.htm
          </p>
        </DashboardCard>
        <DashboardCard>
          <h2>Mijn investeringen</h2>
          <p>Laat hier alle investeringen zien</p>
        </DashboardCard>
        <DashboardCard>
          <h2>Nieuwste mogelijkheden</h2>
          <p>Laat nieuwste websites zien</p>
        </DashboardCard>
        <DashboardCard>
          <h2>Nieuwste mogelijkheden</h2>
          <p>Laat nieuwste websites zien</p>
        </DashboardCard>
      </DashboardLayout>
    </Layout>
  );
};

export default ProtectedPage(Dashboard);
