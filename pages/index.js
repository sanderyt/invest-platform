import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import LatestSection from "../components/LatestSection";
import Newsletter from "../components/Newsletter";
import Concept from "../components/Concept";
import ScheduleCall from "../components/ScheduleCall";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <LatestSection />
      <Newsletter />
      <Concept />
      <ScheduleCall />
    </Layout>
  );
};

export default Home;
