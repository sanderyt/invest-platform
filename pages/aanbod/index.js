import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ALL_WEBSITES from "../../graphql/graphql/queries/allWebsites.gql";

import Layout from "../../components/Layout";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Subheader from "../../components/Subheader";
import SkeletonLine from "../../components/SkeletonLine";

const Aanbod = () => {
  const { loading, error, data } = useQuery(ALL_WEBSITES);

  const Content = () => {
    if (loading)
      return (
        <>
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
        </>
      );

    if (data) {
      console.log(data);
      return (
        <>
          {data.websites.map(website => {
            return (
              <ListItem
                id={website.id}
                key={website.id}
                monthlyProfit={website.monthlyProfit}
                price={website.targetAmount}
                url={website.url}
              />
            );
          })}
        </>
      );
    }

    if (error) {
      return <h3 className="m-2 text--error">{error.message}</h3>;
    }
  };

  return (
    <Layout>
      <Subheader subtitle="Aangeboden websites" />
      <List>
        <Content />
      </List>
    </Layout>
  );
};

export default Aanbod;
