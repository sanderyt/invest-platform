import React from "react";
import useForm from "../../hooks/useForm";
import { useLogin } from "../../api/firebase/hooks";
import validateLogin from "../../utils/validateLogin";

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

  function submit() {
    loginUser(values.email, values.password);
  }

  const { loginUser, error, isLoading } = useLogin();
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
      <Button clickHandler={handleSubmit} isLoading={isLoading}>
        Inloggen
      </Button>
      {error && <span className="text--error mt-3">{error}</span>}
    </div>
  );
};

export default Login;
