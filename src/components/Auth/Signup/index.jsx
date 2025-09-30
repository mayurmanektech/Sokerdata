import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "../../FormControls";
import SignUpImage from '../../../assets/images/signup.webp';

const SignUp = () => {
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
          <h1 className="heading">Create Your SökerData Account</h1>
          <p className="subheading">Create an anonymous account to contribute your experiences and insights.</p>
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
          <p className="input-note small"><span>Note on Privacy:</span> A short paragraph on data anonymity and privacy, emphasizing that users will remain anonymous via their Patient ID.</p>
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

export default SignUp;
