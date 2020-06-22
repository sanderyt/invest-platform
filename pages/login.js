import React, { useContext } from "react";

import useForm from "../hooks/useForm";
import { useLogin } from "../api/firebase/hooks";
import validateLogin from "../utils/validateLogin";
import { AuthContext } from "../context/auth";

import Layout from "../components/Layout";
import Subheader from "../components/Subheader";
import Box from "../components/Box";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      email: "",
      password: ""
    },
    submit,
    validateLogin
  );
  const { loginUser, error, isLoading } = useLogin();

  function submit() {
    loginUser(values.email, values.password);
  }
  return (
    <Layout>
      <Subheader subtitle="Login" />
      <Box>
        <h3>Inloggen</h3>
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
        <Button clickHandler={handleSubmit} isLoading={isLoading}>
          Inloggen
        </Button>
        {error && <span className="text--error mt-3">{error}</span>}
      </Box>
    </Layout>
  );
};

export default Login;
