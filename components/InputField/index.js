import React from "react";

const InputField = ({ name, label, type, error }) => {
  return (
    <div className="textfield d-flex flex-column">
      <span className="text--grey600 label">{label}</span>
      <input type={type} name={name} />
      <span className={error ? "textfield__error active" : "textfield_error"}>
        {error}
      </span>
    </div>
  );
};

export default InputField;
