import React from "react";
import Banner from "../components/Home/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { RadioInput, TextInput } from "../components/FormControls";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; // For form validation

const CollectorSignature = () => {
  const navigate = useNavigate();

  // Formik setup: initial values and validation schema
  const formik = useFormik({
    initialValues: {
      collectorName: "",
      contactMethod: "",
    },
    validationSchema: Yup.object({
      collectorName: Yup.string().required("Collector's name is required"),
      contactMethod: Yup.string().required("Please select a contact method"),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
      // Navigate to the next page (thank you page in this case)
      navigate("/thankyou");
    },
  });

  return (
    <>
      <Header />
      <div className="internal-page small-banner-page">
        <Banner>
          <div className="banner-content">
            <h1 className="mb-0">Collector Signature</h1>
          </div>
        </Banner>
        <section className="section_space profile-question-form mx-834">
          <div className="container">
            <h2>Section 9: Collector</h2>
            <p className="form-desc">MHRA requirements</p>
            <form onSubmit={formik.handleSubmit} className="rounded-input-form">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <strong>
                      29. Collector: Name of person who collected/reported data
                    </strong>
                  </p>
                  <div className="form-col offset">
                    <TextInput
                      id="collectorName"
                      type="text"
                      placeholder="Enter collector's name"
                      value={formik.values.collectorName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors.collectorName}
                      touched={formik.touched.collectorName}
                    />
                  </div>
                  <p>
                    <strong>Collector's Role</strong>
                  </p>
                  <div className="form-col">
                    <RadioInput
                      label="Preferred Contact Method"
                      id="contactMethod"
                      name="contactMethod"
                      type="radio"
                      options={[
                        { value: "role1", label: "Yourself" },
                        { value: "role2", label: "Carer" },
                        { value: "role3", label: "Family friend" },
                        { value: "role4", label: "SokerData Representative" },
                      ]}
                      value={formik.values.contactMethod}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
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
                  SUBMIT
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

export default CollectorSignature;
