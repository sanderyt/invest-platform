import React from "react";

import Layout from "../../components/Layout";
import Subheader from "../../components/Subheader";

const Blog = () => {
  return (
    <Layout>
      <Subheader
        subtitle="Blog"
        description="De laatste artikelen over online geld verdienen."
      />
      <h1>Hier komen blog posts!</h1>
    </Layout>
  );
};

export default Blog;
