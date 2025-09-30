import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "../components/FormControls";
import SignUpImage from '../assets/images/signup.webp';

const CheckEmail = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      alert(`Form data: ${JSON.stringify(values)}`);
    },
  });

  return (
    <section className="d-flex signup-wrapper">
      <div className="signup-img">
        <img src={SignUpImage} alt="" />
      </div>
      <div className="signup-form">
        <div className="d-flex flex-column">
          <h1 className="heading">Check Your Email</h1>
          <p className="subheading">We've sent a sign-in link to:</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <TextInput
            placeholder="Email Address"
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <p className="input-note small">Click the link in the email to sign in to your account. If you don't see the email, check your spam folder.</p>
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
    </section>
  );
};

export default CheckEmail;
