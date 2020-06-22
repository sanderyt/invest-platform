import React from "react";

import Layout from "../components/Layout";
import Subheader from "../components/Subheader";
import Box from "../components/Box";
import InputField from "../components/InputField";

const Registreren = () => {
  return (
    <Layout>
      <Subheader
        subtitle="Registreren"
        description="Om volledige toegang te krijgen, moet u registreren"
      />
      <Box>
        <h3>Registeer voor volledige toegang</h3>
        <InputField name="firstName" label="Voornaam" type="text" />
        <InputField name="lastName" label="Achternaam" type="text" />
        <InputField name="residence" label="Woonplaats" type="text" />
        <InputField name="email" label="Email" type="text" />
        <InputField name="password" label="Wachtwoord" type="password" />
        <InputField
          name="confirmPassword"
          label="Wachtwoord bevestigen"
          type="password"
        />
        <button className="btn btn--primary">Registreren</button>
      </Box>
    </Layout>
  );
};

export default Registreren;
