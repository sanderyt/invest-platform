export default function validateLogin(values) {
  let errors = {};

  for (const [key, value] of Object.entries(values)) {
    if (!value) errors[key] = `${key} is verplicht`;
  }

  return errors;
}
