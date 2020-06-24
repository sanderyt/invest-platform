import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Latest />
      <Newsletter />
    </Layout>
  );
};

export default Home;
