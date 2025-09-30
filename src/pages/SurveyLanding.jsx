import React from "react";
import Banner from "../components/Home/Banner";
import Header from "../components/Header/Header";
import ContentFrame from "../components/Home/ContentFrame";
import { NavLink } from "react-router-dom";
import sl_frame1 from "../assets/images/survey-landing-frame1.webp";
import sl_frame2 from "../assets/images/survey-landing-frame2.webp";
import sl_frame3 from "../assets/images/survey-landing-frame3.webp";
import ContactBg from "../assets/images/contact-bg.webp";
import FooterTopBlack from "../components/Home/FooterTopBlack";
import Footer from "../components/Footer/Footer";

const SurveyLanding = () => {
  return (
    <>
      <Header />
      <div className="internal-page">
        <Banner>
          <div className="banner-content">
            <h1>Your Journey with Ozempic:</h1>
            <p className="big mb-3">
              Share Your Experience and Help Shape the Future of Care
            </p>
            <p>
              Thank you for participating in this important research. Your
              unique insights help us understand the real-world effects of
              [Ozempic] and contribute to improving care for future patients.
            </p>
            <button
              type="submit"
              className="btn primary-black"
            >
              Start Survey
            </button>
          </div>
        </Banner>
        <section className="section_space">
          <div className="container">
            <ContentFrame>
              <div className="content">
                <h2>Why Your Experience Matters</h2>
                <p>
                  This survey is designed to capture the full scope of patient
                  experiences with Ozempic, including any side effects,
                  benefits, or challenges you may have encountered. By sharing
                  your journey, you contribute invaluable information that
                  allows healthcare providers and researchers to:
                </p>
                <ol>
                  <li>
                    Better understand the impact of Ozempic across diverse
                    populations.
                  </li>
                  <li>
                    Identify common patterns and adverse events associated with
                    treatment.
                  </li>
                  <li>
                    Improve treatment plans and ensure that patient experiences
                    guide healthcare decisions.
                  </li>
                </ol>
              </div>
              <div className="frame">
                <img src={sl_frame1} alt="Why Your Experience Matters"></img>
              </div>
            </ContentFrame>
            <ContentFrame>
              <div className="frame">
                <img src={sl_frame2} alt="What We’re Looking For"></img>
              </div>
              <div className="content">
                <h2>What We're Looking For</h2>
                <p>
                  We aim to gather a wide range of experiences with [Medicine],
                  including:
                </p>
                <div className="list-container">
                  <ol className="styled-list">
                    <li>
                      <strong>Adverse Events and Side Effects:</strong> Help us
                      understand the frequency, intensity, and impact of any
                      side effects.
                    </li>
                    <li>
                      <strong>Treatment Outcomes:</strong> Share how [Medicine]
                      has affected your overall health and quality of life.
                    </li>
                    <li>
                      <strong>Personal Insights:</strong> Your firsthand
                      perspective on how [Medicine] has influenced your daily
                      life, well-being, and healthcare journey.
                    </li>
                  </ol>
                </div>
              </div>
            </ContentFrame>
            <ContentFrame>
              <div className="content">
                <h2>How Your Data Will Be Used</h2>
                <p>
                  The data collected will be anonymized and securely stored,
                  used solely for research purposes to improve healthcare
                  treatments and outcomes. No identifying information will be
                  shared publicly, and your responses will remain confidential.
                </p>
              </div>
              <div className="frame">
                <img src={sl_frame3} alt="How Your Data Will Be Used"></img>
              </div>
            </ContentFrame>
          </div>
        </section>
        <section
          className="contact-info-section text-center"
          style={{ backgroundImage: "url(" + ContactBg + ")" }}
        >
          <div className="container">
            <h2>Ready to Begin?</h2>
            <p>
              Click below to start sharing your experience with Ozempic. Every
              answer helps shape the future of patient care.
            </p>
            <NavLink to={"/profile-questions"} className={"btn primary-black"}>
              Start Survey
            </NavLink>
          </div>
        </section>
        <section className="help-section">
          <div className="container">
            <FooterTopBlack>
              <div className="help-main">
                <div className="help-left">
                  <h2>Need Assistance?</h2>
                  <p>
                    If you have any questions or concerns about this survey,
                    please contact us at{" "}
                    <NavLink to={"mailto:support@soker-data.com"}>
                      support@soker-data.com
                    </NavLink>
                    .
                  </p>
                </div>
                <div className="help-right">
                  <p>
                    Thank you for your contribution to advancing healthcare
                    research and making a difference for future patients.
                  </p>
                </div>
              </div>
            </FooterTopBlack>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SurveyLanding;
