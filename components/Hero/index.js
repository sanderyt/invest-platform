import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="hero__container row">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <div className="hero__box d-flex flex-column align-items-center justify-content-center">
            <h1 className="mt-5 text--white">
              Het crowdfunding platform voor het kopen van{" "}
              <span className="text--green">winstgevende</span> websites
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
                  <button className="btn btn--lg">Uitleg concept</button>
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
