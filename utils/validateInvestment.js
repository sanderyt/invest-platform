const validateAmount = values => {
  let errors = {};

  for (const [key, value] of Object.entries(values)) {
    if (!value) errors[key] = `${key} is verplicht`;
  }

  if (values.investedAmount < 250) {
    errors.investedAmount = "De minimale investering is 250,-";
  }

  return errors;
};

export default validateAmount;
