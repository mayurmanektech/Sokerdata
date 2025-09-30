import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  CheckboxInput,
  RadioInput,
  SelectInput,
  TextInput,
} from "../FormControls";

function PersonForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
      terms: false,
      contactMethod: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
      gender: Yup.string().required("Gender is required"),
      terms: Yup.boolean()
        .required("You must accept the terms")
        .oneOf([true], "You must accept the terms and conditions"),
      contactMethod: Yup.string().required("Please select a contact method"),
    }),
    onSubmit: (values) => {
      alert(`Form data: ${JSON.stringify(values)}`);
    },
  });

  return (
    <div className="container mt-5">
      <h1>User Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          label="Name"
          id="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
        />

        <TextInput
          label="Email"
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />

        <TextInput
          label="Password"
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />

        <SelectInput
          label="Gender"
          id="gender"
          type="select"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          options={[
            { value: "", label: "Select Gender" },
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ]}
          error={formik.errors.gender}
          touched={formik.touched.gender}
        />

        <CheckboxInput
          label="I accept the terms and conditions"
          id="terms"
          type="checkbox"
          value={formik.values.terms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.terms}
          touched={formik.touched.terms}
        />

        <RadioInput
          label="Preferred Contact Method"
          id="contactMethod"
          type="radio"
          value={formik.values.contactMethod}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          options={[
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
          ]}
          error={formik.errors.contactMethod}
          touched={formik.touched.contactMethod}
        />

        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
