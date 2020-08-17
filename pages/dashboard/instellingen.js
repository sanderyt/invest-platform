import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";

import Layout from "../../components/Layout";
import DashboardLayout from "../../components/DashboardLayout";

const Instellingen = props => {
  const context = useContext(AuthContext);
  return (
    <Layout>
      <DashboardLayout>
        <h1>Instellingen</h1>
        <h2>{context.user.email}</h2>
      </DashboardLayout>
    </Layout>
  );
};

export default Instellingen;
