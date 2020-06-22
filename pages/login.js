import React from "react";

import useForm from "../hooks/useForm";
import validateLogin from "../utils/validateLogin";

import Layout from "../components/Layout";
import Subheader from "../components/Subheader";
import Box from "../components/Box";
import InputField from "../components/InputField";

const Login = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      email: "",
      password: ""
    },
    submit,
    validateLogin
  );

  function submit() {
    console.log("Submitted Succesfully");
    console.log(values);
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
        <button className="btn btn--primary" onClick={handleSubmit}>
          Login
        </button>
      </Box>
    </Layout>
  );
};

export default Login;
