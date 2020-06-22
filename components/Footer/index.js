import React from "react";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="footer__inner row">
        <div className="col-md-4 col-sm-12 d-flex align-items-center flex-column">
          <h2>online-belegging.nl</h2>
          <span>
            Samen investeren in digitale objecten en passief inkomen genereren.
            Met mijn jarenlange expertise in affiliate marketing, weet ik
            precies hoe ik een website draaiende moet houden.
          </span>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center">
          <h3>Navigatie</h3>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center">
          <h3>Nieuwsbrief aanmelden</h3>
        </div>
      </div>
      <div className="footer__bottom row">
        <span>Copyright</span>
      </div>
    </div>
  );
};

export default Footer;
