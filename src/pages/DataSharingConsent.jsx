import React from "react";
import Banner from "../components/Home/Banner";
import Header from "../components/Header/Header";
import { NavLink, useNavigate } from "react-router-dom";
import ContactBg from "../assets/images/contact-bg.webp";
import { CheckboxInput } from "../components/FormControls";
import Footer from "../components/Footer/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";

const DataSharingConsent = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      terms: false,
    },
    validationSchema: Yup.object({
      terms: Yup.boolean()
        .required("You must accept the terms")
        .oneOf([true], "You must accept the terms and conditions"),
    }),
    onSubmit: () => {
      navigate("/surveys");
    },
  });
  return (
    <>
      <Header />
      <div className="internal-page">
        <Banner>
          <div className="banner-content">
            <h1>
              Consent to Share Data for<br></br>Real-World Evidence Survey
            </h1>
          </div>
        </Banner>
        <section className="section_space data-section">
          <div className="container">
            <div>
              <h2>Purpose of the Study</h2>
              <p>
                You are invited to participate in this survey, which aims to
                collect real-world evidence (RWE) on patient experiences with
                healthcare treatments. The insights generated will improve
                healthcare outcomes, support medical research, and increase
                treatment accessibility for diverse populations.
              </p>
              <p className="m-0">
                <strong>What Data Will Be Collected</strong>
              </p>
              <p>This survey will collect:</p>
              <div className="list-container mb-5 pb-3">
                <ol className="styled-list">
                  <li>
                    <strong>Demographic Information</strong> (e.g., age, gender,
                    ethnicity)patient-centered and responsive to real-world
                    data.
                  </li>
                  <li>
                    <strong>Health and Treatment-Related Information</strong>{" "}
                    (e.g., medication use, side effects, health outcomes)
                  </li>
                  <li>
                    <strong>Feedback on Healthcare Experiences</strong> (e.g.,
                    overall satisfaction, accessibility of care)
                  </li>
                </ol>
              </div>

              <h2>Data Storage & Use</h2>
              <p>
                Your data will be securely stored on SökerData's platform, which
                adheres to stringent industry security standards to ensure your
                data remains confidential. SökerData encrypts all information
                both in transit and at rest, and only uses your data for
                research purposes that align with improving healthcare systems,
                treatments, and patient care.
              </p>
              <p className="m-0">
                <strong>How Your Data Will Be Used</strong>
              </p>
              <p>The data you provide will be:</p>
              <div className="list-container mb-5 pb-3">
                <ol className="styled-list">
                  <li>
                    <strong>Anonymized</strong> to ensure your identity remains
                    confidential.
                  </li>
                  <li>
                    <strong>Used for research purposes</strong> to gather
                    insights on patient experiences across diverse populations.
                  </li>
                  <li>
                    <strong>
                      Shared solely with researchers, healthcare institutions,
                      and regulatory bodies
                    </strong>{" "}
                    to inform better healthcare decisions.
                  </li>
                </ol>
              </div>

              <h2>Data Sharing</h2>
              <p>
                To maximize the impact of your data, anonymized data may be
                shared with:
              </p>
              <div className="list-container">
                <ol className="styled-list">
                  <li>
                    <strong>Healthcare Providers</strong> to support the
                    improvement of patient treatment and care.
                  </li>
                  <li>
                    <strong>Research Organizations</strong> focusing on
                    bettering health outcomes.
                  </li>
                  <li>
                    <strong>Regulatory Bodies</strong> evaluating the
                    effectiveness and safety of healthcare interventions.
                  </li>
                </ol>
              </div>
              <p className="mb-5 pb-3">
                No personally identifiable information will be shared or
                distributed in these data exchanges.
              </p>

              <h2>Your Rights</h2>
              <div className="list-container mb-5 pb-3">
                <ol className="styled-list">
                  <li>
                    <strong>Voluntary Participation:</strong> Participation is
                    entirely voluntary. You may withdraw at any time without
                    consequence.
                  </li>
                  <li>
                    <strong>Access & Correction:</strong> You have the right to
                    request access to your data and, if applicable, correct or
                    request deletion of your information unless restricted by
                    legal or research-related requirements.
                  </li>
                  <li>
                    <strong>Future Exclusions:</strong> You may request that
                    your data be excluded from future analyses at any time.
                  </li>
                </ol>
              </div>

              <h2>Data Security</h2>
              <p>
                SökerData employs advanced security measures to safeguard your
                data. Encryption and secure access protocols are in place,
                ensuring only authorized personnel, bound by confidentiality
                agreements, have access to your information. Regular security
                audits further ensure the protection of your data.
              </p>
              <ul className="ul-list mb-5 pb-3">
                <li>
                  SökerData is compliant with global data protection standards
                  and upholds the principles outlined by the ICO and relevant
                  Data Protection Legislation.
                </li>
              </ul>

              <h2>Data Retention</h2>
              <p>
                Your data will be retained only as long as necessary to fulfill
                the study’s research objectives and legal requirements. Upon the
                study's completion, all personal identifiers will be permanently
                removed to maintain data anonymization.
              </p>
            </div>
          </div>
        </section>
        <section
          className="contact-info-section text-center"
          style={{ backgroundImage: "url(" + ContactBg + ")" }}
        >
          <div className="container">
            <h2>Contact Information</h2>
            <p>
              If you have questions or need support regarding this survey or
              your data rights, please reach us at{" "}
              <NavLink to={"mailto:weareheretolisten@soker-data.com"}>
                weareheretolisten@soker-data.com.
              </NavLink>
            </p>
          </div>
        </section>
        <form onSubmit={formik.handleSubmit}>
          <section className="section_space terms-section">
            <div className="container">
              <h2 className="text-center">Terms of Participation</h2>
              <div>
                <div className="list-container mb-0">
                  <ol className="styled-list">
                    <li>
                      <strong>Voluntary Participation: </strong>Your
                      participation in this survey is completely voluntary. You
                      may choose to stop participating or withdraw your consent
                      at any time without any penalties.
                    </li>
                    <li>
                      <strong>Data Storage: </strong>Your data will be securely
                      stored on Amazon Web Services (AWS) infrastructure. AWS
                      provides robust data protection, including encryption and
                      access control, ensuring your information is safeguarded.
                    </li>
                    <li>
                      <strong>Data Confidentiality: </strong>Any personal data
                      you provide will be anonymized to ensure your privacy. No
                      personally identifiable information will be shared
                      publicly or with any third parties outside the scope of
                      this research.
                    </li>
                    <li>
                      <strong>Use of Data: </strong>The anonymized data will be
                      used solely for research purposes to advance healthcare
                      treatments, improve patient outcomes, and promote health
                      equity. It may be shared with authorized parties as
                      specified in the consent form.
                    </li>
                    <li>
                      <strong>Withdrawal of Consent: </strong>You have the right
                      to withdraw your consent at any time. Upon withdrawal,
                      your data will no longer be used in future analyses, and
                      your identifiable information, if any, will be removed.
                    </li>
                    <li>
                      <strong>Right to Access and Amend Data: </strong>You may
                      request access to the data we have about you and, where
                      applicable, correct or request the deletion of any
                      inaccuracies, subject to legal or research-related
                      constraints.
                    </li>
                    <li>
                      <strong>Data Security: </strong>AWS provides
                      state-of-the-art security measures, including encryption
                      at rest and during transmission, ensuring the protection
                      of your data. Access to your data is restricted to
                      authorized personnel only, in compliance with applicable
                      data protection laws.
                    </li>
                    <li>
                      <strong>Data Retention: </strong>Your data will be
                      retained for research purposes for as long as necessary to
                      fulfill the study's objectives. Upon completion, any
                      personal identifiers will be removed to ensure permanent
                      anonymization.
                    </li>
                    <li>
                      <strong>Contact for Questions: </strong>If you have any
                      questions about the survey or your data rights, you can
                      reach us at{" "}
                      <NavLink to={"mailto:weareheretolisten@soker-data.com"}>
                        weareheretolisten@soker-data.com.
                      </NavLink>
                    </li>
                  </ol>
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="term-check">
                        <CheckboxInput
                          id="terms"
                          type="checkbox"
                          options={[
                            {
                              value: "terms",
                              label:
                                "By continuing with this survey, you acknowledge that you have read, understood, and agree to the terms and consent outlined above.",
                            },
                          ]}
                          value={formik.values.terms}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.errors.terms}
                          touched={formik.touched.terms}
                        />
                      </div>
                      <div className="term-check">
                        <CheckboxInput
                          id="terms"
                          type="checkbox"
                          options={[
                            {
                              value: "terms",
                              label:
                                "By checking this box, you confirm that you have read and accepted our Terms and Conditions and Privacy Policy.",
                            },
                          ]}
                          value={formik.values.terms}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.errors.terms}
                          touched={formik.touched.terms}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 mt-2 d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn primary-black"
                      // disabled={!formik.isValid || formik.isSubmitting}
                    >
                      log in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default DataSharingConsent;
