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
        <InputField name="Voornaam" />
        <InputField name="Achternaam" />
        <InputField name="Woonplaats" />
        <InputField name="Email" />
        <button className="btn btn--primary">Registreren</button>
      </Box>
    </Layout>
  );
};

export default Registreren;
