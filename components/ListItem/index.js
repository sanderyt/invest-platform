import React from "react";
import Link from "next/link";

const ListItem = ({ id, url, monthlyProfit, price }) => {
  return (
    <Link href={`/aanbod/${id}`}>
      <a>
        <div className="listitem row d-flex align-items-center">
          <div className="col-md-2 d-flex">1234</div>
          <div className="col-md-2 d-flex">{url}</div>
          <div className="col-md-2 d-flex">Retail/shopping</div>
          <div className="col-md-2 d-flex">€{monthlyProfit} p/m</div>
          <div className="col-md-2 d-flex">€{price},-</div>
          <div className="col-md-2 d-flex">vanaf €250,-</div>
        </div>
      </a>
    </Link>
  );
};

export default ListItem;
