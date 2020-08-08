import React from "react";

import Layout from "../../components/Layout";
import DashboardLayout from "../../components/DashboardLayout";

const Instellingen = props => {
  return (
    <Layout>
      <DashboardLayout>
        <h1>Instellingen</h1>
        <h2>{props.sander}</h2>
      </DashboardLayout>
    </Layout>
  );
};

export default Instellingen;
