import React from "react";

function DateInput({
  label,
  id,
  value,
  placeholder,
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
        type="date"
        id={id}
        name={id}
        className={`form-control ${touched && error ? "is-invalid" : ""}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default DateInput;
