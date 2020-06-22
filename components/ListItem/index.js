import React from "react";
import Link from "next/link";

const ListItem = ({ idx }) => {
  return (
    <Link href="/aanbod/1234">
      <a>
        <div className="listitem row d-flex align-items-center">
          <div className="col-md-2 d-flex">15452</div>
          <div className="col-md-2 d-flex">Luier-aanbiedingen.net</div>
          <div className="col-md-2 d-flex">Retail/shopping</div>
          <div className="col-md-2 d-flex">€2.883,- p/m</div>
          <div className="col-md-2 d-flex">€40.000,-</div>
          <div className="col-md-2 d-flex">vanaf €250,-</div>
        </div>
      </a>
    </Link>
  );
};

export default ListItem;
