import React, { useContext } from "react";

import useForm from "../hooks/useForm";
import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { AuthContext } from "../context/auth";
import validateRegister from "../utils/validateRegister";
import REGISTER_USER from "../graphql/graphql/mutations/registerUser.gql";

import Layout from "../components/Layout";
import Subheader from "../components/Subheader";
import Box from "../components/Box";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Registreren = () => {
  const router = useRouter();
  const context = useContext(AuthContext);
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

  const [registerUser, { error, called }] = useMutation(REGISTER_USER, {
    variables: {
      username: values.email,
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      residence: values.residence
    },
    onCompleted(data) {
      context.login(data.createUser);
      router.push("/dashboard");
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
    }
  });

  function submit() {
    registerUser();
  }

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
        <Button clickHandler={handleSubmit} isLoading={called}>
          Registeren
        </Button>
        {error && <span className="text--error mt-3">{error.message}</span>}
      </Box>
    </Layout>
  );
};

export default Registreren;
