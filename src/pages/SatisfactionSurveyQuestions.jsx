import React from "react";
import Banner from "../components/Home/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { RadioInput, TextInput } from "../components/FormControls";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  satisfactionWithTreatment: Yup.string().optional("This field is required"),
  healthcareProviderCommunication: Yup.string().optional(
    "This field is required"
  ),
  understandingOfTreatment: Yup.string().optional("This field is required"),
  supportSystems: Yup.string().optional("This field is required"),
  howLongTakingOzempic: Yup.string().optional("This field is required"),
  preOzempicWeight: Yup.string().optional("This field is required"),
  impactOnQualityOfLife: Yup.string().optional("This field is required"),
});

const SatisfactionSurveyQuestions = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      satisfactionWithTreatment: "",
      healthcareProviderCommunication: "",
      understandingOfTreatment: "",
      supportSystems: "",
      howLongTakingOzempic: "",
      preOzempicWeight: "",
      impactOnQualityOfLife: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/final-thoughts");
    },
  });

  return (
    <>
      <Header />
      <div className="internal-page small-banner-page">
        <Banner>
          <div className="banner-content">
            <h1 className="mb-0">Satisfaction Survey Questions</h1>
          </div>
        </Banner>
        <form onSubmit={formik.handleSubmit}>
          <section className="section_space profile-question-form mx-1040">
            <div className="container">
              <h2>Section 5: Patient Satisfaction and Experience</h2>
              <p className="form-desc">
                Gauge overall satisfaction with the treatment and care provided
                during the study.
              </p>
              <form action="" className="rounded-input-form">
                <div className="row">
                  <div className="col-12">
                    <p>
                      <strong>19. Satisfaction with Treatment: </strong>How
                      satisfied are you with your treatment with Ozempic?
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="satisfactionWithTreatment"
                        type="radio"
                        options={[
                          { value: "satisfied1", label: "Very satisfied" },
                          { value: "satisfied2", label: "Satisfied" },
                          {
                            value: "satisfied3",
                            label: "Neither satisfied nor dissatisfied",
                          },
                          { value: "satisfied4", label: "Dissatisfied" },
                          { value: "satisfied5", label: "Very dissatisfied" },
                        ]}
                        value={formik.values.satisfactionWithTreatment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.satisfactionWithTreatment}
                        touched={formik.touched.satisfactionWithTreatment}
                      />
                    </div>

                    <p>
                      <strong>20. Healthcare Provider Communication: </strong>
                      How well do you feel your healthcare provider has
                      communicated with you regarding your treatment?
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="healthcareProviderCommunication"
                        type="radio"
                        options={[
                          { value: "healthcare1", label: "Extremely well" },
                          { value: "healthcare2", label: "Very well" },
                          { value: "healthcare3", label: "Adequately" },
                          { value: "healthcare4", label: "Poorly" },
                          { value: "healthcare5", label: "Very poorly" },
                        ]}
                        value={formik.values.healthcareProviderCommunication}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.healthcareProviderCommunication}
                        touched={formik.touched.healthcareProviderCommunication}
                      />
                    </div>

                    <p>
                      <strong>21. Understanding of Treatment: </strong>Do you
                      feel you understand the benefits and risks of Ozempic
                      treatment?
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="understandingOfTreatment"
                        type="radio"
                        options={[
                          {
                            value: "understand1",
                            label: "Completely understand",
                          },
                          { value: "understand2", label: "Mostly understand" },
                          {
                            value: "understand3",
                            label: "Somewhat understand",
                          },
                          { value: "understand4", label: "Barely understand" },
                          { value: "understand5", label: "Do not understand" },
                        ]}
                        value={formik.values.understandingOfTreatment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.understandingOfTreatment}
                        touched={formik.touched.understandingOfTreatment}
                      />
                    </div>

                    <p>
                      <strong>22. Support Systems: </strong>How supported do you
                      feel by family and friends during your treatment with
                      Ozempic?
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="supportSystems"
                        type="radio"
                        options={[
                          { value: "support1", label: "Extremely supported" },
                          { value: "support2", label: "Very supported" },
                          { value: "support3", label: "Somewhat supported" },
                          { value: "support4", label: "Barely supported" },
                          { value: "support5", label: "Not supported at all" },
                        ]}
                        value={formik.values.supportSystems}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.supportSystems}
                        touched={formik.touched.supportSystems}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <h2>Section 7: Real-World Evidence (RWE) and Patient Outcomes</h2>
              <p className="form-desc">
                Collect real-world data on the effectiveness of Ozempic in
                managing weight loss.
              </p>
              <form action="" className="rounded-input-form">
                <div className="row">
                  <div className="col-12">
                    <p>
                      <strong>
                        23. How long have you been taking Ozempic?{" "}
                      </strong>
                    </p>
                    <div className="form-col offset">
                      <TextInput
                        id="howLongTakingOzempic"
                        type="text"
                        placeholder={"Enter your weight"}
                        value={formik.values.howLongTakingOzempic}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.howLongTakingOzempic}
                        touched={formik.touched.howLongTakingOzempic}
                      />
                    </div>

                    <p>
                      <strong>
                        24. To your knowledge what was your weight before taking
                        ozempic? What is your weight now?
                      </strong>
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="preOzempicWeight"
                        type="radio"
                        options={[
                          { value: "ozempic1", label: "Less than a month" },
                          { value: "ozempic2", label: "1 - 3 months" },
                          { value: "ozempic3", label: "Less than 6 months" },
                          { value: "ozempic4", label: "6- 12 months" },
                          { value: "ozempic5", label: "1 - 2 years" },
                          { value: "ozempic6", label: "2 years+" },
                        ]}
                        value={formik.values.preOzempicWeight}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.preOzempicWeight}
                        touched={formik.touched.preOzempicWeight}
                      />
                    </div>

                    <p>
                      <strong>25. Impact on Quality of Life: </strong>How would
                      you rate your overall quality of life now compared to
                      before starting the treatment?
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="impactOnQualityOfLife"
                        type="radio"
                        options={[
                          { value: "quality1", label: "Much better" },
                          { value: "quality2", label: "Somewhat better" },
                          { value: "quality3", label: "About the same" },
                          { value: "quality4", label: "Somewhat worse" },
                          { value: "quality5", label: "Much worse" },
                        ]}
                        value={formik.values.impactOnQualityOfLife}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.impactOnQualityOfLife}
                        touched={formik.touched.impactOnQualityOfLife}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="d-flex justify-content-end mb-5 gap-3">
                <button
                  className="btn secondary-black"
                  fdprocessedid="wallnk"
                  onClick={() => navigate(-1)}
                >
                  PREVIOUS
                </button>
                <button
                  className="btn primary-black"
                  fdprocessedid="wallnk"
                  type="submit"
                >
                  NEXT
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SatisfactionSurveyQuestions;
