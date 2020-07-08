import React from "react";
import Link from "next/link";

const ListItem = ({ id, url, monthlyProfit, price }) => {
  return (
    <Link href={`/aanbod/${id}`}>
      <a>
        <div className="listitem row d-flex align-items-center">
          <div className="col-md-3">{url}</div>
          <div className="col-md-3">Retail/shopping</div>
          <div className="col-md-2">€{monthlyProfit} p/m</div>
          <div className="col-md-2">€{price},-</div>
          <div className="col-md-2">vanaf €250,-</div>
        </div>
      </a>
    </Link>
  );
};

export default ListItem;
