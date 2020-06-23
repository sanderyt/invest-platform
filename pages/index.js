import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Latest from "../components/Latest";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Latest />
    </Layout>
  );
};

export default Home;
