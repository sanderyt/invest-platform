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
              Investeer samen in affiliate websites en genereer duurzaam passief
              inkomen
            </h2>
            <div>
              <Link href="/aanbod">
                <a>
                  <button className="btn btn--cta btn--lg">
                    Bekijk aangeboden websites
                  </button>
                </a>
              </Link>
              <Link href="/uitleg">
                <a>
                  <button className="btn btn--lg">Hoe werkt het?</button>
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
