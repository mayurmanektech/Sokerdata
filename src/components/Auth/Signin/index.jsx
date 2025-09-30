import { useFormik } from "formik";
import { TextInput } from "../../FormControls";
import * as Yup from "yup";
import SignIpImage from "../../../assets/images/signin.webp";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { patient_id: "" },
    validationSchema: Yup.object({
      patient_id: Yup.string().required("Patient ID is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/data-sharing-consent");
    },
  });

  return (
    <section className="d-flex flex-row-reverse signup-wrapper signin-wrapper">
      <div className="signup-img">
        <img src={SignIpImage} alt="SignIn" />
      </div>
      <div className="signup-form">
        <div className="d-flex flex-column">
          <h1 className="heading">Welcome Back to SökerData</h1>
          <p className="mb-4">
            Ready to continue sharing your insights? Log back into your account
            to access new surveys and contribute further to advancing
            healthcare.
          </p>
          <h3>Secure Sign-In with Patient ID</h3>
          <p className="small">
            To ensure your privacy, SökerData uses anonymous sign-ins through
            your unique Patient ID. By entering your Patient ID below, you'll
            receive a secure, one-time login link and verification code sent to
            your email on file. Simply click the link or enter the code to start
            your new survey.
          </p>
          <h3>Enter Your Patient ID</h3>

          <form onSubmit={formik.handleSubmit} className="mt-2">
            <div className="signin-field">
              <TextInput
                label="Patient ID:"
                id="patient_id"
                type="text"
                value={formik.values.patient_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.patient_id}
                touched={formik.touched.patient_id}
                note={formik.values.patient_id}
              />
              <span className="signin-note">
                (Enter your unique ID to receive a one-time login link)
              </span>
            </div>

            <p className="input-note small mt-5 mb-0">
              <span className="d-block mb-1">Can't find your Patient ID?</span>{" "}
              Check your welcome email or contact us at{" "}
              <a href="#">
                <strong>support@soker-data.com</strong>
              </a>{" "}
              for help retrieving it securely.
            </p>

            <hr className="my-4" />

            <div className="mt-4">
              <h3>How It Works</h3>
              <ol className="ps-4">
                <li>
                  <strong>Enter Your Patient ID</strong> - This ID keeps your
                  data anonymous and secure.
                </li>
                <li>
                  <strong>Receive a One-Time Link</strong> - A sign-in link and
                  verification code will be sent to your registered email.
                </li>
                <li>
                  <strong>Access Your New Survey</strong> - Click the link or
                  enter the code to securely log in and complete your survey.
                </li>
              </ol>
            </div>

            <div className="mb-3">
              <button
                type="submit"
                className="btn w-100 btn-primary"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    // <section className="auth-container">
    //   <div className="auth-inner-container">
    //     <div className="d-flex flex-column">
    //       <div className="heading">Sign In</div>
    //       <div className="subheading">Sign in using you patient ID.</div>
    //     </div>

    //     <form onSubmit={formik.handleSubmit} className="mt-4">
    //       <TextInput
    //         label="Patient ID"
    //         id="patient_id"
    //         type="text"
    //         value={formik.values.patient_id}
    //         onChange={formik.handleChange}
    //         onBlur={formik.handleBlur}
    //         error={formik.errors.patient_id}
    //         touched={formik.touched.patient_id}
    //       />

    //       <div className="mb-3">
    //         <button
    //           type="submit"
    //           className="btn btn-primary"
    //           disabled={!formik.isValid || formik.isSubmitting}
    //         >
    //           Submit
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </section>
  );
};

export default SignIn;
