const RadioInput = ({
  label,
  id,
  value,
  onChange,
  onBlur,
  error,
  touched,
  options,
  children,
  spicifyinput
}) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div>
        {options.map((option) => (
          <>
          <div className={`form-check radio-wrapper ${option.spicifyinput ? "has-specify-input" : ""}`} key={option.value}>
            <input
              type="radio"
              id={option.value}
              name={id}
              value={option.value}
              className={`form-check-input ${
                touched && error ? "is-invalid" : ""
              }`}
              checked={value === option.value}
              onChange={onChange}
              onBlur={onBlur}
            />
            <label className="form-check-label" htmlFor={option.value}>
              {option.label}
            </label>
            {option.spicifyinput ? children : ""}
          </div>
        </>
        ))}
      </div>
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default RadioInput;
