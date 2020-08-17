import React, { useContext } from "react";

import useForm from "../../hooks/useForm";
import { validateLogin } from "../../utils/validators";
import { AuthContext } from "../../context/auth";
import { useRouter } from "next/router";

import { useMutation } from "@apollo/react-hooks";
import LOGIN_USER from "../../graphql/graphql/mutations/login.gql";

import InputField from "../InputField";
import Button from "../Button";

const Login = () => {
  const router = useRouter();
  const context = useContext(AuthContext);
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      email: "",
      password: ""
    },
    submit,
    validateLogin
  );
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER, {
    variables: {
      identifier: values.email,
      password: values.password
    },
    onCompleted(userData) {
      console.log(userData);
      context.login(userData.login);
      router.push("/dashboard");
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
    }
  });

  function submit() {
    loginUser();
  }

  if (error) console.log(error);

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
      {error && <span className="text--error mt-3">{error.name}</span>}
    </div>
  );
};

export default Login;
