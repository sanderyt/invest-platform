import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import ALL_WEBSITES from "../../graphql/graphql/queries/allWebsites.gql";

import WebsiteCard from "../WebsiteCard";
import SkeletonThumb from "../SkeletonThumb";

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
            monthlyProfit={website.monthlyProfit}
            progressAmount={5000}
            targetAmount={website.targetAmount}
            thumbnail={`https://cms-invest-platform.herokuapp.com${website.thumbnail.url}`}
          />
        );
      });

    if (error) {
      return <h3 className="m-2 text--error">{error.message}</h3>;
    }
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
