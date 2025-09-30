import React from "react";

function TextInput({
  label,
  id,
  value,
  placeholder,
  type,
  onChange,
  onBlur,
  error,
  touched,
}) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={`${touched && error ? "is-invalid" : ""}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default TextInput;
