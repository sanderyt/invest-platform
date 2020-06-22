export default function validateRegister(values) {
  let errors = {};

  for (const [key, value] of Object.entries(values)) {
    if (!value) errors[key] = `${key} is verplicht`;
  }

  if (values.password !== values.confirmPassword)
    errors.password = "Het wachtwoord komt niet overeen.";

  console.log(errors);

  return errors;
}
