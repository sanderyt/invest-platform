/**
 *
 * @param {Object} values
 */
export const validateRegister = values => {
  let errors = {};

  for (const [key, value] of Object.entries(values)) {
    if (!value) errors[key] = `${key} is verplicht`;
  }

  if (values.password !== values.confirmPassword)
    errors.password = "Het wachtwoord komt niet overeen.";

  console.log(errors);

  return errors;
};

/**
 *
 * @param {Object} values
 */
export const validateLogin = values => {
  let errors = {};

  for (const [key, value] of Object.entries(values)) {
    if (!value) errors[key] = `${key} is verplicht`;
  }

  return errors;
};

/**
 *
 * @param {Object} values
 */
export const validateInvestment = values => {
  let errors = {};

  for (const [key, value] of Object.entries(values)) {
    if (!value) errors[key] = `${key} is verplicht`;
  }

  if (values.investedAmount < 250) {
    errors.investedAmount = "De minimale investering is 250,-";
  }

  return errors;
};
