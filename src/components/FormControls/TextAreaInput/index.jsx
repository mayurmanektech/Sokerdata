const TextAreaInput = ({
  id,
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  rows = 4, // Default to 4 rows
  error,
  touched,
}) => {
  return (
    <div className="mb-3">
      {label && <label htmlFor={id} className="form-label">{label}</label>}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-control ${touched && error ? "is-invalid" : ""}`}
        placeholder={placeholder}
        rows={rows}
      />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextAreaInput;
