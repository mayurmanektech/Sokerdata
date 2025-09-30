import React from "react";
import Banner from "../components/Home/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { TextAreaInput } from "../components/FormControls";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; // Formik validation library

const FinalThoughts = () => {
  const navigate = useNavigate();

  // Formik initial values and validation schema
  const formik = useFormik({
    initialValues: {
      comments: "",
    },
    validationSchema: Yup.object({
      comments: Yup.string()
        .max(1000, "Must be 1000 characters or less")
        .required("Comments are required"),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
      // You can navigate to the next page after submission
      navigate("/collector-signature");
    },
  });

  return (
    <>
      <Header />
      <div className="internal-page small-banner-page">
        <Banner>
          <div className="banner-content">
            <h1 className="mb-0">Final Thoughts</h1>
          </div>
        </Banner>
        <section className="section_space profile-question-form mx-834">
          <div className="container">
            <h2>Section 8: Final Thoughts and Additional Comments</h2>
            <p className="form-desc">
              Any additional thoughts or concerns that may have yet to be
              covered in the structured questions.
            </p>
            <form onSubmit={formik.handleSubmit} className="rounded-input-form">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <strong>
                      28. Is there any other information you would like to share
                      about your health history or current health condition and
                      your experience with Ozempic? (Please write your response)
                    </strong>
                  </p>
                  <div className="form-col">
                    <TextAreaInput
                      id="comments"
                      label="Comments"
                      placeholder="Enter your additional thoughts here..."
                      value={formik.values.comments}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.comments}
                      touched={formik.touched.comments}
                    />
                    <span className="input-note">
                      {formik.values.comments.length}/1000 characters
                    </span>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-5 gap-3">
                <button
                  className="btn secondary-black"
                  onClick={() => navigate(-1)}
                >
                  PREVIOUS
                </button>
                <button type="submit" className="btn primary-black">
                  NEXT
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

export default FinalThoughts;
