import React from "react";

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="row d-flex flex-column">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <div className="hero__box d-flex flex-column align-items-center justify-content-center">
            <h1 className="mt-5 text--white">
              Het crowdfunding platform voor het kopen van websites
            </h1>
            <h2 className="text--white">
              Genereer samen met mij een passief inkomen met "digitaal" vastgoed
            </h2>
            <button className="btn btn--lg">Bekijk aangeboden websites</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
