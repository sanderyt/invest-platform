import React from "react";

import useForm from "../hooks/useForm";
import { useRegister } from "../api/firebase/functions";
import validateRegister from "../utils/validateRegister";

import Layout from "../components/Layout";
import Subheader from "../components/Subheader";
import Box from "../components/Box";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Registreren = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      firstName: "",
      lastName: "",
      residence: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    submit,
    validateRegister
  );
  const { registerUser, user, error, isLoading } = useRegister();

  function submit() {
    registerUser(values.email, values.password);
  }

  if (user) console.log(user, "user");

  return (
    <Layout>
      <Subheader
        subtitle="Registreren"
        description="Om volledige toegang te krijgen, moet u registreren"
      />
      <Box>
        <h3>Registeer voor volledige toegang</h3>
        <InputField
          name="firstName"
          label="Voornaam"
          type="text"
          value={values.firstName}
          error={errors.firstName}
          changeHandler={handleChange}
        />
        <InputField
          name="lastName"
          label="Achternaam"
          type="text"
          value={values.lastName}
          error={errors.lastName}
          changeHandler={handleChange}
        />
        <InputField
          name="residence"
          label="Woonplaats"
          type="text"
          value={values.residence}
          error={errors.residence}
          changeHandler={handleChange}
        />
        <InputField
          name="email"
          label="Email"
          type="text"
          value={values.email}
          error={errors.email}
          changeHandler={handleChange}
        />
        <InputField
          name="password"
          label="Wachtwoord"
          type="password"
          value={values.password}
          error={errors.password}
          changeHandler={handleChange}
        />
        <InputField
          name="confirmPassword"
          label="Wachtwoord bevestigen"
          type="password"
          value={values.confirmPassword}
          error={errors.password}
          changeHandler={handleChange}
        />
        <Button clickHandler={handleSubmit} isLoading={isLoading}>
          Registeren
        </Button>
        {error && <span className="text--error mt-3">{error}</span>}
      </Box>
    </Layout>
  );
};

export default Registreren;
