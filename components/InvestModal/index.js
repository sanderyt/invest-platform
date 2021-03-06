import React, { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import { validateInvestment } from "../../utils/validators";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../../context/auth";
import ADD_INVESTMENT from "../../graphql/graphql/mutations/addInvestment.gql";
import GET_DETAIL_WEBSITE from "../../graphql/graphql/queries/detailWebsite.gql";

import InputField from "../../components/InputField";
import Button from "../Button";
import LoginForm from "../LoginForm";

const InvestModal = ({ progressAmount, numberOfInvestors, websiteId }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    { investedAmount: 0 },
    submit,
    validateInvestment
  );
  const { user } = useContext(AuthContext);
  const [addedInvestment, setAddedInvestment] = useState(false);

  const [addInvestment, { error, loading }] = useMutation(ADD_INVESTMENT, {
    variables: {
      website: websiteId,
      amountInvested: values.investedAmount,
      user: user.id
    },
    update(_, result) {
      setAddedInvestment(true);
      console.log(result);
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
    },
    refetchQueries: [
      { query: GET_DETAIL_WEBSITE, variables: { id: websiteId } }
    ]
  });

  function submit() {
    console.log(websiteId, values.investedAmount, user.user.id);
    addInvestment();
  }

  return (
    <div>
      {user ? (
        addedInvestment ? (
          <>
            <h3>Bedankt voor uw investering.</h3>
            <span className="text--green">
              U heeft €{values.investedAmount},- geinvesteerd.
            </span>
            <p>
              Wanneer het doelbedrag is opgehaald, zult u een mail hierover
              ontvangen.
            </p>
            <Button clickHandler={() => setAddedInvestment(false)}>
              Nog een investering doen
            </Button>
          </>
        ) : (
          <>
            <p className="text--grey400">
              U kunt investeren vanaf €250,- voor dit object. Voor meer
              informatie of vragen, kunt u contact opnemen.
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
                <Button clickHandler={handleSubmit} isLoading={loading}>
                  Investeer
                </Button>
              </div>
              <span className="text--grey400 mt-3">
                Geschatte inkomsten per maand:
              </span>
              <p>Deze feature later pas uitwerken</p>
              <h3 className="text--green">€67,- p/m *</h3>
            </div>
          </>
        )
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
