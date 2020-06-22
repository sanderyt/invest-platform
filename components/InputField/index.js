import React from "react";

const InputField = ({ name, error = false }) => {
  return (
    <div className="textfield d-flex flex-column">
      <span className="text--grey600 label">{name}</span>
      <input type="text" name={name} />
      {error && (
        <span className="textfield__error">
          U moet minimaal 250,- inleggen.
        </span>
      )}
    </div>
  );
};

export default InputField;
