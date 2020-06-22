import React from "react";

import Layout from "../components/Layout";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Subheader from "../components/Subheader";

const Aanbod = () => {
  return (
    <Layout>
      <Subheader subtitle="Investeer in digitaal vastgoed!!!" />
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </Layout>
  );
};

export default Aanbod;
