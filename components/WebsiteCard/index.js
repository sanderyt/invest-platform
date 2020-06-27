import React from "react";
import Link from "next/link";

import ProgressBar from "../ProgressBar";

const WebsiteCard = () => {
  return (
    <Link href="/aanbod/1234">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div className="card m-4">
          <img src="/thumb.png" className="card__thumb" />
          <div className="card__info p-3 d-flex flex-column justify-content-center">
            <h3 className="text--primary p-2">Luier-aanbiedingen.net</h3>
            <div className="d-flex p-2 justify-content-between">
              <h3>Doel</h3>
              <h3 className="text--primary">€52.000</h3>
            </div>
            <div className="d-flex p-2 justify-content-between mb-3">
              <span className="text--grey400">Maandelijkse winst</span>
              <span className="text--green">€3.212,- p/m</span>
            </div>
            <ProgressBar progress="77%" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WebsiteCard;
