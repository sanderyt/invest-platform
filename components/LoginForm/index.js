import React from "react";
import useForm from "../../hooks/useForm";
import validateLogin from "../../utils/validateLogin";
import { useMutation } from "@apollo/client";

import LOGIN_USER from "../../graphql/graphql/mutations/login.gql";

import InputField from "../InputField";
import Button from "../Button";

const Login = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      email: "",
      password: ""
    },
    submit,
    validateLogin
  );
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER, {
    variables: {},
    update(_, result) {
      console.log(result);
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
    }
  });

  function submit() {
    loginUser();
  }

  return (
    <div className="d-flex flex-column align-items-center">
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
      <Button clickHandler={handleSubmit} isLoading={loading}>
        Inloggen
      </Button>
      {error && <span className="text--error mt-3">{error}</span>}
    </div>
  );
};

export default Login;
