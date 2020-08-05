import React, { useContext } from "react";
import { ProtectedPage } from "../../components/ProtectedPage";
import { AuthContext } from "../../context/auth";

import Layout from "../../components/Layout";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardCard from "../../components/DashboardCard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <Layout>
      <DashboardLayout>
        <DashboardCard>
          <p>
            Laat hier KPI's zien mbt investeringen, ROI, hoeveel al verdiend
            etc...
            https://nl.freepik.com/premium-psd/heyinz-invoice-admin-dashboard-ui-kit_6960231.htm
          </p>
          <p>
            Protected routes:
            https://medium.com/@tafka_labs/auth-redirect-in-nextjs-3a3a524c0a06
          </p>
        </DashboardCard>
        <DashboardCard>
          <h2>Mijn profiel</h2>
          {user && (
            <>
              <p>{user.user.email}</p>
              <p>{user.user.username}</p>
              <p>{user.user.id}</p>
            </>
          )}
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
