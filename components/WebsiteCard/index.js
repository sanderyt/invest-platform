import React from "react";

const WebsiteCard = () => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div className="card m-4">
        <img src="/thumb.png" className="card__thumb" />
        <div className="card__info px-3 d-flex flex-column justify-content-center align-items-center">
          <h3 className="text--primary">Luier-aanbiedingen.net</h3>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
