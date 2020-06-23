import React from "react";

import WebsiteCard from "../WebsiteCard";

const Latest = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center p-5">
          <h1>Onlangs toegevoegde websites</h1>
        </div>
      </div>
      <div className="row d-flex">
        <WebsiteCard />
        <WebsiteCard />
        <WebsiteCard />
      </div>
      <button className="btn btn--lg">Bekijk alle websites</button>
    </div>
  );
};

export default Latest;
