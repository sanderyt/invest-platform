export default function validateRegister(values) {
  let errors = {};

  console.log(values, "values");

  if (!values[name]) {
    errors[name] = `${name} is verplicht`;
  }

  if (!values.email) {
    errors.email = "Email invullen is verplicht.";
  }

  if (!values.residence) {
    errors.residence = "Woonplaats invullen is verplicht.";
  }

  return errors;
}
