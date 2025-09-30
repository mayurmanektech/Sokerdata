import React from "react";
import Banner from "../components/Home/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { SelectInput, TextInput } from "../components/FormControls";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").optional(),
  country: Yup.string().required("Country is required"),
  gender: Yup.string().required("Gender is required"),
  height: Yup.string().optional(),
  weight: Yup.string().optional(),
  ethnicity: Yup.string().optional(),
  education: Yup.string().optional(),
});

const ProfileQuestions = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      country: "",
      gender: "",
      town: "",
      postcode: "",
      height: "",
      weight: "",
      ethnicity: "",
      education: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // handle submit here
      console.log(values);
      navigate("/survey-specific-questions");
    },
  });

  return (
    <>
      <Header />
      <div className="internal-page small-banner-page">
        <Banner>
          <div className="banner-content">
            <h1 className="mb-0">Profile Questions</h1>
          </div>
        </Banner>
        <section className="section_space profile-question-form">
          <div className="container">
            <h2>Section 0: Contact and Location Information</h2>
            <p className="form-desc">
              Please fill out this form to help us understand our diverse
              community better.
            </p>

            {/* Formik wrapper */}
            <form className="rounded-input-form" onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-col">
                    <label>
                      Email Address <span>(Optional)</span>
                    </label>
                    <TextInput
                      id="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.email}
                      touched={formik.touched.email}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-col">
                    <label>
                      Country <span>(Mandatory)</span>
                    </label>
                    <SelectInput
                      id="country"
                      type="select"
                      options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" },
                      ]}
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.country}
                      touched={formik.touched.country}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-col">
                    <label>
                      Town <span>(Optional)</span>
                    </label>
                    <TextInput
                      id="town"
                      type="text"
                      value={formik.values.town}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.town}
                      touched={formik.touched.town}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-col">
                    <label>
                      Postcode <span>(Optional)</span>
                    </label>
                    <TextInput
                      id="postcode"
                      type="text"
                      value={formik.values.postcode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.postcode}
                      touched={formik.touched.postcode}
                    />
                  </div>
                </div>
              </div>

              {/* Demographic Information Section */}
              <h2>Section 1: Demographic Information</h2>
              <p className="form-desc">
                It is essential to ensure we can correlate outcomes to diverse
                and representative demographics including age, ethnicity,
                gender.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-col">
                    <label>
                      Gender Identity <span>(Mandatory)</span>
                    </label>
                    <SelectInput
                      id="gender"
                      type="select"
                      options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" },
                      ]}
                      value={formik.values.gender}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.gender}
                      touched={formik.touched.gender}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-col">
                    <label>Height</label>
                    <TextInput
                      id="height"
                      type="text"
                      value={formik.values.height}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.height}
                      touched={formik.touched.height}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-col">
                    <label>Weight</label>
                    <TextInput
                      id="weight"
                      type="text"
                      value={formik.values.weight}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.weight}
                      touched={formik.touched.weight}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-col">
                    <label>Ethnicity</label>
                    <SelectInput
                      id="ethnicity"
                      type="select"
                      options={[
                        { value: "asian", label: "Asian" },
                        { value: "black", label: "Black" },
                        { value: "white", label: "White" },
                      ]}
                      value={formik.values.ethnicity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.ethnicity}
                      touched={formik.touched.ethnicity}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-col">
                    <label>Education</label>
                    <SelectInput
                      id="education"
                      type="select"
                      options={[
                        { value: "highschool", label: "High School" },
                        { value: "bachelor", label: "Bachelor" },
                        { value: "masters", label: "Masters" },
                        { value: "phd", label: "PhD" },
                      ]}
                      value={formik.values.education}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.education}
                      touched={formik.touched.education}
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="submit" className="btn primary-black">
                  Next
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProfileQuestions;
