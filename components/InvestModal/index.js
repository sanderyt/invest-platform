import React, { useContext } from "react";
import useForm from "../../hooks/useForm";
import validateAmount from "../../utils/validateInvestment";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../../context/auth";

import InputField from "../../components/InputField";
import Button from "../Button";
import LoginForm from "../LoginForm";

const InvestModal = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    { investedAmount: 0 },
    submit,
    validateAmount
  );
  const { user } = useContext(AuthContext);

  function submit() {
    console.log("submitted");
  }

  return (
    <div>
      {user ? (
        <>
          <p className="text--grey400">
            U kunt investeren vanaf €250,- voor dit object. Voor meer informatie
            of vragen, kunt u contact opnemen.
          </p>
          <div
            className="d-flex flex-column justify-content-around"
            style={{ width: "100%" }}
          >
            <div className="d-flex justify-content-around">
              <InputField
                name="investedAmount"
                label="Investering"
                type="text"
                value={values.investedAmount}
                error={errors.investedAmount}
                changeHandler={handleChange}
              />
              <Button clickHandler={handleSubmit}>Investeer</Button>
            </div>
            <span className="text--grey400 mt-3">
              Geschatte inkomsten per maand:
            </span>
            <p>Deze feature later pas uitwerken</p>
            <h3 className="text--green">€67,- p/m *</h3>
          </div>
        </>
      ) : (
        <div>
          <h3 className="text--error mb-3">
            Om te kunnen investeren, moet je een account hebben.
          </h3>
          <LoginForm />
          <h3>Nog geen account?</h3>
        </div>
      )}
    </div>
  );
};

export default InvestModal;
