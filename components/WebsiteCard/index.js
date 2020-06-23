import React from "react";
import Link from "next/link";

import ProgressBar from "../ProgressBar";

const WebsiteCard = () => {
  return (
    <Link href="/aanbod/1234">
      <div className="col-sm-6 col-md-6 col-lg-4">
        <div className="card m-4">
          <img src="/thumb.png" className="card__thumb" />
          <div className="card__info p-3 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text--primary">Luier-aanbiedingen.net</h3>
            <ProgressBar progress="77%" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WebsiteCard;
