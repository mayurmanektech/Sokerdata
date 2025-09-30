const CheckboxInput = ({
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
    <>
      {options.map((option) => (
        <div className="mb-3 form-check checkbox-wrapper">
          <input
            type="checkbox"
            id={option.value}
            name={option.value}
            className={`form-check-input ${
              touched && error ? "is-invalid" : ""
            }`}
            checked={
              Array.isArray(value) ? value.includes(option.value) : value
            }
            onChange={onChange}
            onBlur={onBlur}
          />
          <label className="form-check-label" htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </>
  );
};

export default CheckboxInput;

// import React from 'react';

// const CheckboxInput = ({
//   label,
//   id,
//   value,
//   onChange,
//   onBlur,
//   error,
//   touched,
//   options,
// }) => {
//   return (
//     <div className="mb-3">
//       <label className="form-label">{label}</label>
//       <div>
//         {options.map((option) => (
//           <div className="form-check checkbox-wrapper" key={option.value}>
//             <input
//               type="checkbox"
//               id={option.value}
//               name={id}
//               value={option.value}
//               className={`form-check-input ${
//                 touched && error ? 'is-invalid' : ''
//               }`}
//               checked={value.includes(option.value)} // Check if the value is in the array
//               onChange={onChange}
//               onBlur={onBlur}
//             />
//             <label className="form-check-label" htmlFor={option.value}>
//               {option.label}
//             </label>
//           </div>
//         ))}
//       </div>
//       {touched && error && <div className="invalid-feedback">{error}</div>}
//     </div>
//   );
// };

// export default CheckboxInput;
