const SelectInput = ({
  label,
  id,
  value,
  onChange,
  onBlur,
  error,
  touched,
  options,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        id={id}
        name={id}
        className={`form-select ${touched && error ? "is-invalid" : ""}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectInput;
