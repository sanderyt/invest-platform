import React from "react";

const DetailBar = () => {
  return (
    <div className="container-fluid mb-5">
      <div className="detailbar row d-flex">
        <div className="col-6 d-flex align-items-center justify-content-center">
          <span className="text--grey400">Home > Aanbod > Object 53524</span>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <span className="text--grey400">1241x bekeken</span>
          <span className="text--grey400">Aangeboden sinds 19 oktober</span>
        </div>
      </div>
    </div>
  );
};

export default DetailBar;
