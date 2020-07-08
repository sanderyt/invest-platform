import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import ALL_WEBSITES from "../../api/graphql/allWebsites.gql";

import WebsiteCard from "../WebsiteCard";
import SkeletonThumb from "../SkeletonThumb";
import SkeletonLine from "../SkeletonLine";

const Latest = () => {
  const { loading, error, data } = useQuery(ALL_WEBSITES);

  const Content = () => {
    if (loading)
      return (
        <>
          <div className="col-md-4">
            <SkeletonThumb />
          </div>
          <div className="col-md-4">
            <SkeletonThumb />
          </div>
          <div className="col-md-4">
            <SkeletonThumb />
          </div>
        </>
      );

    if (data)
      return data.websites.map(website => {
        return (
          <WebsiteCard
            id={website.id}
            url={website.url}
            key={website.id}
            thumbnail={website.thumbnail.url}
            monthlyProfit={website.monthlyProfit}
            numberOfInvestors={website.numberOfInvestors}
            progressAmount={website.progressAmount}
            targetAmount={website.targetAmount}
          />
        );
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center p-5">
          <h1>Onlangs toegevoegde websites</h1>
        </div>
      </div>
      <div className="row d-flex">
        <Content />
      </div>
      <div className="row d-flex justify-content-center">
        <Link href="/aanbod">
          <a>
            <button className="btn btn--lg">Bekijk alle websites</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Latest;
