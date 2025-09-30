import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Home/Banner";
import { TextInput } from "../components/FormControls";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Surveys = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      survey: "",
    },
    validationSchema: Yup.object({
      survey: Yup.string().required("Please provide survey ID."),
    }),
    onSubmit: () => {
      navigate("/survey-landing");
    },
  });

  const surveys = [
    {
      id: "SRV001",
      title: "Patient Experience Survey",
      status: "Not Started",
      lastUpdated: "2023-11-01",
      action: "Start Survey",
    },
    {
      id: "SRV002",
      title: "Health Outcomes Assessment",
      status: "In Progress",
      lastUpdated: "2023-11-05",
      action: "Continue",
    },
    {
      id: "SRV003",
      title: "Treatment Satisfaction Survey",
      status: "Completed",
      lastUpdated: "2023-10-28",
      action: "View Responses",
    },
  ];
  return (
    <>
      <Header />
      <div className="internal-page">
        <Banner>
          <div className="banner-content">
            <h1>Welcome</h1>
            <p>
              Here, you can view and manage all surveys assigned to your
              account. Your insights help us build a healthcare system that’s
              inclusive, data-driven, and responsive to real-world patient
              needs.
            </p>
          </div>
        </Banner>
        <section className="survey-page section_space">
          <div className="container">
            <div className="survey-wrapper">
              <h2>Your Surveys</h2>
              <p>
                Each survey linked to your Patient ID is displayed below. Select
                a survey to start, continue, or review your responses.
              </p>

              <div className="table-responsive my-5">
                <table className="survey-table">
                  <thead>
                    <tr>
                      <th>Survey ID</th>
                      <th>Survey Title</th>
                      <th>Status</th>
                      <th>Last Updated</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {surveys.map((survey) => (
                      <tr key={survey.id}>
                        <td>{survey.id}</td>
                        <td className="title">{survey.title}</td>
                        <td>{survey.status}</td>
                        <td className="fw600">{survey.lastUpdated}</td>
                        <td>
                          <button className="action-button">
                            {survey.action}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="add-survey">
                <h2>Add A Survey</h2>
                <p>
                  You may also add additional surveys to your account by
                  entering a new Survey ID provided by SökerData.
                </p>

                <form className="mt-4 pt-3" onSubmit={formik.handleSubmit}>
                  <TextInput
                    placeholder="Enter Survey ID"
                    id="survey"
                    type="text"
                    name="survey"
                    value={formik.values.survey}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.survey}
                    touched={formik.touched.survey}
                  />
                  <button type="submit" className="btn btn-primary">
                    ADD SURVEY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Surveys;
