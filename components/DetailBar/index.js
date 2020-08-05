import React from "react";

const DetailBar = ({ createdAt }) => {
  return (
    <div className="container-fluid mb-5">
      <div className="detailbar row d-flex">
        <div className="col-6 d-flex align-items-center justify-content-center"></div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <span className="text--grey400">Aangeboden sinds {createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailBar;
