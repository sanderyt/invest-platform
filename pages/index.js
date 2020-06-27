import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Newsletter from "../components/Newsletter";
import Concept from "../components/Concept";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Latest />
      <Newsletter />
      <Concept />
    </Layout>
  );
};

export default Home;
