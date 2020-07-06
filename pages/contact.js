import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Layout from "../components/Layout";
import Subheader from "../components/Subheader";

const ALL_WEBSITES = gql`
  query allWebsites {
    websites {
      websitename
      descriptionWebsite
      websiteUrl
    }
  }
`;

const Contact = () => {
  const { loading, error, data } = useQuery(ALL_WEBSITES);

  if (loading) console.log("loading...");
  if (error) console.log("error...");
  if (data) console.log(data);

  return (
    <Layout>
      <Subheader subtitle="Contact" />
      <h1>Hier komt de contact pagina</h1>
    </Layout>
  );
};

export default Contact;
