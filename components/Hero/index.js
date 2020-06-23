import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <div className="hero__box d-flex flex-column align-items-center justify-content-center">
            <h1 className="mt-5 text--white">
              Het crowdfunding platform voor het kopen van websites
            </h1>
            <h2 className="text--white">
              Genereer een stabiel passief inkomen met "online" vastgoed
            </h2>
            <div>
              <Link href="/aanbod">
                <a>
                  <button className="btn btn--cta btn--lg">
                    Bekijk aangeboden websites
                  </button>
                </a>
              </Link>
              <Link href="/concept">
                <a>
                  <button className="btn btn--lg">
                    Wat is online vastgoed?
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
