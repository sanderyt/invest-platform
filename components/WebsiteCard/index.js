import React from "react";
import Link from "next/link";

import ProgressBar from "../ProgressBar";

const WebsiteCard = ({
  id,
  url,
  targetAmount,
  progressAmount,
  monthlyProfit,
  numberOfInvestors,
  thumbnail
}) => {
  return (
    <Link href={`/aanbod/${id}`}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
        <div className="card m-4">
          <img src={thumbnail} className="card__thumb" />
          <div className="card__info p-3 d-flex flex-column justify-content-center">
            <h3 className="text--primary p-2">{url}</h3>
            <div className="d-flex p-2 justify-content-between">
              <h3>Doel</h3>
              <h3 className="text--primary">€{targetAmount},-</h3>
            </div>
            <div className="d-flex p-2 justify-content-between mb-3">
              <span className="text--grey400">Maandelijkse winst</span>
              <span className="text--green">€{monthlyProfit},- p/m</span>
            </div>
            <ProgressBar
              targetAmount={targetAmount}
              progressAmount={progressAmount}
              numberOfInvestors={numberOfInvestors}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WebsiteCard;
