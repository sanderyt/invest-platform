import React from "react";

import InputField from "../InputField";
import Button from "../Button";

const Newsletter = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="newsletter row">
        <div className="newsletter__overlay" />
        <div className="newsletter__content d-flex flex-column justify-content-center align-items-center">
          <h1>Mis nooit meer een website. Abboneer op onze alert.</h1>
          <h2>Vul hieronder je e-mailadres in en mis nooit meer een kans.</h2>
          <InputField />
          <button className="btn btn--cta btn--lg">Aanmelden</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
