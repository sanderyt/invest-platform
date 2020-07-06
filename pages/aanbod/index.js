import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ALL_WEBSITES from "../../api/graphql/allWebsites.gql";

import Layout from "../../components/Layout";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Subheader from "../../components/Subheader";

const Aanbod = () => {
  const { loading, error, data } = useQuery(ALL_WEBSITES);

  if (loading) return <h1>Loading content...</h1>;

  if (data)
    return (
      <Layout>
        <Subheader subtitle="Aangeboden websites" />
        <List>
          {data.websites.map(website => {
            return (
              <ListItem
                id={website.id}
                key={website.id}
                monthlyProfit={website.monthlyProfit}
                price={website.price}
                url={website.websitename}
              />
            );
          })}
        </List>
      </Layout>
    );
};

export default Aanbod;
