import React, { useState } from "react";
import Banner from "../components/Home/Banner";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Trash from "../assets/images/icons/trash.svg";
import {
  RadioInput,
  SelectInput,
  TextInput,
  DateInput,
  TextAreaInput,
  CheckboxInput,
} from "../components/FormControls";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const SurveySpecificQuestions = () => {
  const navigate = useNavigate();
  const [medications, setMedications] = useState([
    {
      contactMethod: "",
      specifyOther: "",
      medicationName: "",
      administrationMethod: "",
      dosagePrescribed: "",
      frequency: "",
      dateStarted: "",
      actualDosage: "",
      frequencyTaken: "",
      prescribedFor: "",
    },
  ]);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      medications,
      takenAsPrescribed: "",
      reasonForNotTaking: "",
      motivationToContinue: "",

      didTakeAsPrescribed: "",
      sideEffects: "",
      experience: "",
      severity: "",
      isSerious: "",
      seriousReason: [],
      sideEffectStartTime: "",
      sideEffectFrequency: "",
      menstrualCorrelation: "",
      isPostMenopause: "",
      postMenopauseDuration: "",
      additionalInfo: "",
    },
    validationSchema: Yup.object({
      medications: Yup.array().of(
        Yup.object({
          contactMethod: Yup.string().optional("optional"),
          specifyOther: Yup.string().when("contactMethod", {
            is: "other",
            then: Yup.string().optional("Please specify"),
          }),
          medicationName: Yup.string().optional("Medication name is optional"),
          administrationMethod: Yup.string().optional(
            "Administration method is optional"
          ),
          dosagePrescribed: Yup.string().optional(
            "Dosage prescribed is optional"
          ),
          frequency: Yup.string().optional("Frequency is optional"),
          dateStarted: Yup.date().optional("Start date is optional"),
          actualDosage: Yup.string().optional(
            "Actual dosage taken is optional"
          ),
          frequencyTaken: Yup.string().optional("Frequency taken is optional"),
          prescribedFor: Yup.string().optional(
            "Please specify the reason for prescription"
          ),
        })
      ),
      takenAsPrescribed: Yup.string().optional("This field is optional."),
      reasonForNotTaking: Yup.string().optional("This field is optional."),
      motivationToContinue: Yup.string().optional("This field is optional."),

      didTakeAsPrescribed: Yup.string().optional("This field is optional."),
      sideEffects: Yup.string().when("didTakeAsPrescribed", {
        is: "yes",
        then: Yup.string().optional("Please describe the side effects."),
      }),
      experience: Yup.string().optional("Please describe your experience."),
      severity: Yup.number()
        .min(1, "Please select a severity")
        .max(10, "Severity must be between 1 and 10")
        .optional("This field is optional."),
      isSerious: Yup.string().optional(
        "Please indicate if the reaction was serious."
      ),
      seriousReason: Yup.array()
        .min(0, "Please select at least one reason")
        .when("isSerious", {
          is: "yes",
          then: Yup.array().min(
            1,
            "Please select at least one reason for seriousness."
          ),
        }),
      sideEffectStartTime: Yup.string().optional(
        "Please select when the side effect started."
      ),
      sideEffectFrequency: Yup.string().optional(
        "Please specify how often you experience these symptoms."
      ),
      menstrualCorrelation: Yup.string().optional(
        "Please select an option about the correlation with your menstrual cycle."
      ),
      isPostMenopause: Yup.string().optional(
        "Please indicate if you are post-menopause."
      ),
      postMenopauseDuration: Yup.string().when("isPostMenopause", {
        is: "yes2",
        then: Yup.string().optional(
          "Please specify how long you have been post-menopause."
        ),
      }),
      additionalInfo: Yup.string().optional(),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/satisfaction-survey-questions");
    },
  });

  console.log(formik);
  // Handler to add a new medication
  const addMedication = () => {
    setMedications([
      ...medications,
      {
        contactMethod: "",
        specifyOther: "",
        medicationName: "",
        administrationMethod: "",
        dosagePrescribed: "",
        frequency: "",
        dateStarted: "",
        actualDosage: "",
        frequencyTaken: "",
        prescribedFor: "",
      },
    ]);
    formik.setValues({ medications: [...medications, {}] });
  };

  return (
    <>
      <Header />
      <div className="internal-page small-banner-page">
        <Banner>
          <div className="banner-content">
            <h1 className="mb-0">Survey Specific Questions</h1>
          </div>
        </Banner>
        <form onSubmit={formik.handleSubmit}>
          <section className="section_space profile-question-form mx-1040">
            <div className="container">
              <h2>Section 2: Medical History</h2>
              <p className="form-desc">
                Ozempic is a once-weekly injection for type-2 diabetes and
                weight loss, helping the pancreas release insulin, lower blood
                pressure, and slow digestion.
              </p>
              {formik.values.medications.map((medication, index) => (
                <div action="" className="rounded-input-form mb-2">
                  <div className="row">
                    <div className="col-12">
                      <p>
                        <strong>
                          1. Why did you use Ozempic? / Why are you still using
                          Ozempic?
                        </strong>
                      </p>
                      <div className="form-col">
                        <RadioInput
                          label="Preferred Contact Method"
                          id={`medications.[${index}].contactMethod`}
                          type="radio"
                          options={[
                            { value: "email", label: "Diabetes (Type 2)" },
                            {
                              value: "bp",
                              label: "High blood pressure (Hypertension)",
                            },
                            { value: "weight", label: "Weight loss" },
                            {
                              value: "other",
                              label: "Other:",
                              spicifyinput: true,
                            },
                          ]}
                          value={
                            formik.values.medications?.[index]?.contactMethod
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.medications?.[index]?.contactMethod
                          }
                          touched={
                            formik.touched.medications?.[index]?.contactMethod
                          }
                        >
                          {medication.contactMethod === "other" && (
                            <div className="other-input">
                              <TextInput
                                placeholder="Please specify"
                                id="email"
                                type="email"
                              />
                            </div>
                          )}
                        </RadioInput>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <p>
                      <strong>
                        2. Were you on any other medications at the time of
                        taking Ozempic?
                      </strong>
                    </p>
                    <div className="col-md-6">
                      <div className="form-col">
                        <label>Medication Name</label>
                        <TextInput
                          id={`medications.[${index}].medicationName`}
                          type="text"
                          value={
                            formik.values.medications?.[index]?.medicationName
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.medications?.[index]?.medicationName
                          }
                          touched={
                            formik.touched.medications?.[index]?.medicationName
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-col">
                        <label>Administration Method</label>
                        <SelectInput
                          id={`medications.[${index}].administrationMethod`}
                          type="select"
                          options={[
                            { value: "method1", label: "method1" },
                            { value: "method2", label: "method2" },
                            { value: "method3", label: "method3" },
                          ]}
                          value={
                            formik.values.medications?.[index]
                              ?.administrationMethod
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.errors?.[index]?.administrationMethod}
                          touched={
                            formik.touched?.[index]?.administrationMethod
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-col">
                            <label>Dosage Prescribed</label>
                            <TextInput
                              id={`medications.[${index}].dosagePrescribed`}
                              type="text"
                              value={
                                formik.values.medications?.[index]
                                  ?.dosagePrescribed
                              }
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={
                                formik.errors.medications?.[index]
                                  ?.dosagePrescribed
                              }
                              touched={
                                formik.touched.medications?.[index]
                                  ?.dosagePrescribed
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-col">
                            <label>Frequency</label>
                            <SelectInput
                              id={`medications.[${index}].frequency`}
                              type="select"
                              options={[
                                { value: "Frequency1", label: "Frequency1" },
                                { value: "Frequency2", label: "Frequency2" },
                                { value: "Frequency3", label: "Frequency3" },
                              ]}
                              value={
                                formik.values.medications?.[index]?.frequency
                              }
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={
                                formik.errors.medications?.[index]?.frequency
                              }
                              touched={
                                formik.touched.medications?.[index]?.frequency
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-col">
                        <label>Date Started</label>
                        <DateInput
                          label="Select a date"
                          id={`medications.[${index}].dateStarted`}
                          value={
                            formik.values.medications?.[index]?.dateStarted
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.medications?.[index]?.dateStarted
                          }
                          touched={
                            formik.touched.medications?.[index]?.dateStarted
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-col">
                            <label>Actual Dosage Taken</label>
                            <TextInput
                              type="text"
                              id={`medications.[${index}].actualDosage`}
                              value={
                                formik.values.medications?.[index]?.actualDosage
                              }
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={
                                formik.errors.medications?.[index]?.actualDosage
                              }
                              touched={
                                formik.touched.medications?.[index]
                                  ?.actualDosage
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-col">
                            <label>Frequency</label>
                            <SelectInput
                              type="select"
                              options={[
                                { value: "Frequency1", label: "Frequency1" },
                                { value: "Frequency2", label: "Frequency2" },
                                { value: "Frequency3", label: "Frequency3" },
                              ]}
                              id={`medications.[${index}].frequencyTaken`}
                              value={
                                formik.values.medications?.[index]
                                  ?.frequencyTaken
                              }
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={
                                formik.errors.medications?.[index]
                                  ?.frequencyTaken
                              }
                              touched={
                                formik.touched.medications?.[index]
                                  ?.frequencyTaken
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-col">
                        <label>Date Started</label>
                        <DateInput
                          label="Select a date"
                          id={`medications.[${index}].dateStarted`}
                          value={
                            formik.values.medications?.[index]?.dateStarted
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.medications?.[index]?.dateStarted
                          }
                          touched={
                            formik.touched.medications?.[index]?.dateStarted
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-col mb-0">
                        <label>prescribed for</label>
                        <TextInput
                          type="text"
                          id={`medications.[${index}].prescribedFor`}
                          value={
                            formik.values.medications?.[index]?.prescribedFor
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.medications?.[index]?.prescribedFor
                          }
                          touched={
                            formik.touched.medications?.[index]?.prescribedFor
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="d-flex justify-content-end mb-5 pb-4">
                <button className="btn primary-black btn-large" onClick={addMedication}>
                  add another medication
                </button>
              </div>
              <h2>Section 3: Treatment Adherence and Compliance</h2>
              <p>
                To understand patient adherence to Ozempic and identify barriers
                to consistent use.
              </p>
              <div action="" className="rounded-input-form">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      <strong>
                        1. Did you take Ozempic every time you were supposed to?
                      </strong>
                    </p>
                    <div className="form-col">
                      <SelectInput
                        id="takenAsPrescribed"
                        type="select"
                        options={[
                          { value: "method1", label: "method1" },
                          { value: "method2", label: "method2" },
                          { value: "method3", label: "method3" },
                        ]}
                        value={formik.values.takenAsPrescribed}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.takenAsPrescribed}
                        touched={formik.touched.takenAsPrescribed}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <p>
                      <strong>
                        2. What was the main reason you didn’t take it as
                        prescribed?
                      </strong>
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="reasonForNotTaking"
                        type="radio"
                        options={[
                          { value: "effect", label: "Side effects" },
                          { value: "forgot", label: "Forgot to take" },
                          { value: "cost", label: "Cost of medication" },
                          {
                            value: "injection",
                            label: "Difficulty using injections",
                          },
                          {
                            value: "benificial",
                            label: "Didn't feel it was beneficial",
                          },
                          { value: "other1", label: "Other:" },
                        ]}
                        value={formik.values.reasonForNotTaking}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.reasonForNotTaking}
                        touched={formik.touched.reasonForNotTaking}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <p>
                      <strong>3. Motivation to Continue: </strong>Do you plan to
                      continue taking Ozempic?
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="motivationToContinue"
                        type="radio"
                        options={[
                          {
                            value: "motivation1",
                            label:
                              "Yes - I would really like to keep taking Ozempic",
                          },
                          {
                            value: "motivation2",
                            label: "Yes - I would like to keep taking Ozempic",
                          },
                          {
                            value: "motivation3",
                            label:
                              "I don't mind if I continue to take or stop Ozempic",
                          },
                          {
                            value: "motivation4",
                            label: "I do not want to continue taking Ozempic",
                          },
                          {
                            value: "motivation5",
                            label:
                              "I really do not want to continue taking Ozempic",
                          },
                        ]}
                        value={formik.values.motivationToContinue}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.motivationToContinue}
                        touched={formik.touched.motivationToContinue}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h2>Section 4: Side Effects and Safety Monitoring</h2>
              <p>
                To track side effects, their severity, and impact on quality of
                life.
              </p>
              <div action="" className="rounded-input-form">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      <strong>
                        1. Did you take Ozempic every time you were supposed to?
                      </strong>
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="didTakeAsPrescribed"
                        type="radio"
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" },
                        ]}
                        value={formik.values.didTakeAsPrescribed}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.didTakeAsPrescribed}
                        touched={formik.touched.didTakeAsPrescribed}
                      />
                    </div>
                    <div className="d-flex mb-5">
                      <button
                        type="submit"
                        className="btn primary-black"
                      >
                        add Side Effects
                      </button>
                    </div>
                    <div className="list-box">
                      <h3>List of Side Effects</h3>
                      <ul>
                        <li>
                          <p>2. If yes, please type in the side effects</p>
                          <p className="icon">
                            <img src={Trash} alt="Trash" />
                          </p>
                        </li>
                        <li>
                          <p>2. If yes, please type in the side effects</p>
                          <p className="icon">
                            <img src={Trash} alt="Trash" />
                          </p>
                        </li>
                        <li>
                          <p>2. If yes, please type in the side effects</p>
                          <p className="icon">
                            <img src={Trash} alt="Trash" />
                          </p>
                        </li>
                        <li>
                          <p>2. If yes, please type in the side effects</p>
                          <p className="icon">
                            <img src={Trash} alt="Trash" />
                          </p>
                        </li>
                        <li>
                          <p>2. If yes, please type in the side effects</p>
                          <p className="icon">
                            <img src={Trash} alt="Trash" />
                          </p>
                        </li>
                        <li>
                          <p>2. If yes, please type in the side effects</p>
                          <p className="icon">
                            <img src={Trash} alt="Trash" />
                          </p>
                        </li>
                      </ul>
                      <div className="d-flex mt-4 justify-content-end">
                        <button
                          type="submit"
                          className="btn primary-black"
                        >
                          add Another Side Effects
                        </button>
                      </div>
                    </div>



                    <p>
                      <strong>9. Are you post-menopause?</strong>
                    </p>
                    <div className="form-col">
                      <RadioInput
                        label="Preferred Contact Method"
                        id="contactMethod"
                        type="radio"
                        options={[
                          { value: "yes2", label: "Yes" },
                          { value: "no2", label: "No" },
                        ]}
                      />
                    </div>
                    <p>
                      <strong>
                        10. How long have you been post-menopause?
                      </strong>
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-col">
                          <TextInput
                            id="text"
                            type="text"
                            value={"How long post-menopause"}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-col">
                          <SelectInput
                            id="Unit"
                            type="select"
                            options={[
                              { value: "Unit1", label: "Unit1" },
                              { value: "Unit2", label: "Unit2" },
                              { value: "Unit3", label: "Unit3" },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                    <p>
                      <strong>11. Any other relevant information?</strong>
                    </p>
                    <div className="form-col">
                      <TextAreaInput
                        id="comments"
                        label="Comments"
                        placeholder="Additional Information"
                      />
                    </div>
                  </div>
                </div>
              </div>
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

      <div className="modal">
        <div className="modal-wrapper">
          <h2>Add Another Side Effects</h2>
          <p class="form-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <form className="pt-3" onSubmit={formik.handleSubmit}>
            <div class="rounded-input-form mb-2">
                    <p>
                      <strong>
                        2. If yes, please type in the side effects
                      </strong>
                    </p>
                    <div className="form-col mb-4">
                      <TextAreaInput
                        id="sideEffects"
                        label="Comments"
                        placeholder="Describe the side effects"
                        value={formik.values.sideEffects}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.sideEffects}
                        touched={formik.touched.sideEffects}
                      />
                    </div>
              <p>
                <strong>
                  3. Describe your experience in your own words
                </strong>
              </p>
              <div className="form-col">
                <TextAreaInput
                  id="experience"
                  label="Comments"
                  placeholder="Your experience"
                  value={formik.values.experience}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.experience}
                  touched={formik.touched.experience}
                />
              </div>
              <p>
                <strong>
                  4. How severe was the side effect(s), OR how much did
                  the side effect(s) affect you?
                </strong>
              </p>
              <div className="form-col">
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  className="rangeslider"
                  value={formik.values.severity}
                  onChange={formik.handleChange}
                  id="severity"
                />
                <div className="slider-labels">
                  <span>1</span>
                  <span>4-6: Moderate severity</span>
                  <span>7-9: Severe symptoms</span>
                  <span>10: Extremely severe symptoms</span>
                </div>
              </div>
              <p>
                <strong>
                  5. Do you consider the reaction(s) to be serious?
                </strong>
              </p>
              <div className="form-col">
                <RadioInput
                  label="Preferred Contact Method"
                  id="isSerious"
                  type="radio"
                  options={[
                    { value: "yes1", label: "Yes" },
                    { value: "no1", label: "No" },
                  ]}
                  value={formik.values.isSerious}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.isSerious}
                  touched={formik.touched.isSerious}
                />
              </div>
              <p>
                <strong>If Yes: Please indicate why</strong>
              </p>
              <div className="form-col">
                <CheckboxInput
                  id="seriousReason"
                  label="Select Terms"
                  options={[
                    {
                      value: "terms1",
                      label: "Patient died due to reaction",
                    },
                    { value: "terms2", label: "Life-threatening" },
                    { value: "terms3", label: "Congenital abnormality" },
                    {
                      value: "terms4",
                      label:
                        "Involved or prolonged inpatient hospitalization",
                    },
                    {
                      value: "terms5",
                      label:
                        "Involved persistent or significant disability or incapacity",
                    },
                  ]}
                  value={formik.values.seriousReason}
                  onChange={(e) =>
                    formik.setFieldValue(
                      "seriousReason",
                      formik.values.seriousReason.includes(e.target.name)
                        ? [
                            ...formik.values.seriousReason.filter(
                              (r) => r !== e.target.name
                            ),
                          ]
                        : [...formik.values.seriousReason, e.target.name]
                    )
                  }
                  onBlur={formik.handleBlur}
                  error={formik.errors.seriousReason}
                  touched={formik.touched.seriousReason}
                />
                <TextAreaInput
                  id="comments"
                  label="Comments"
                  placeholder="If medically significant, please give details:"
                />
              </div>
              <p>
                <strong>
                  6. How soon after taking Ozempic did the side effects
                  start?
                </strong>
              </p>
              <div className="form-col">
                <SelectInput
                  id="sideEffectStartTime"
                  type="select"
                  options={[
                    { value: "Frequency1", label: "Frequency1" },
                    { value: "Frequency2", label: "Frequency2" },
                    { value: "Frequency3", label: "Frequency3" },
                  ]}
                  value={formik.values.sideEffectStartTime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.sideEffectStartTime}
                  touched={formik.touched.sideEffectStartTime}
                />
              </div>
              <p>
                <strong>
                  7. How often do you experience these symptoms?
                </strong>
              </p>
              <div className="row">
                <div className="col-6">
                  <div className="form-col">
                    <TextInput id="text" type="text" value={1} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-col">
                    <SelectInput
                      id="Frequency"
                      type="select"
                      options={[
                        { value: "Frequency1", label: "Frequency1" },
                        { value: "Frequency2", label: "Frequency2" },
                        { value: "Frequency3", label: "Frequency3" },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <p>
                <strong>
                  8. Have you noticed a correlation between your
                  menstrual cycle and the side effects experienced while
                  taking Ozempic?
                </strong>
              </p>
              <div className="form-col">
                <RadioInput
                  label="Preferred Contact Method"
                  id="contactMethod"
                  type="radio"
                  options={[
                    {
                      value: "correlation1",
                      label:
                        "Yes, side effects are worse during certain phases of my cycle",
                    },
                    {
                      value: "correlation2",
                      label:
                        "Yes, side effects are less during certain phases of my cycle",
                    },
                    {
                      value: "correlation3",
                      label: "No, I haven't noticed any correlation",
                    },
                    { value: "correlation4", label: "I am unsure" },
                  ]}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <button
                className="btn secondary-black"
                fdprocessedid="wallnk"
                onClick={() => navigate(-1)}
              >
                Close
              </button>
              <button
                className="btn primary-black"
                fdprocessedid="wallnk"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="modal">
        <div className="modal-wrapper">
        <form onSubmit={formik.handleSubmit}>
          <h2>Section 2: Medical History</h2>
          <p className="form-desc">
            Ozempic is a once-weekly injection for type-2 diabetes and
            weight loss, helping the pancreas release insulin, lower blood
            pressure, and slow digestion.
          </p>
          {formik.values.medications.map((medication, index) => (
            <div action="" className="rounded-input-form mb-2">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-col">
                    <label>Medication Name</label>
                    <TextInput
                      id={`medications.[${index}].medicationName`}
                      type="text"
                      value={
                        formik.values.medications?.[index]?.medicationName
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.errors.medications?.[index]?.medicationName
                      }
                      touched={
                        formik.touched.medications?.[index]?.medicationName
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-col">
                    <label>Administration Method</label>
                    <SelectInput
                      id={`medications.[${index}].administrationMethod`}
                      type="select"
                      options={[
                        { value: "method1", label: "method1" },
                        { value: "method2", label: "method2" },
                        { value: "method3", label: "method3" },
                      ]}
                      value={
                        formik.values.medications?.[index]
                          ?.administrationMethod
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.errors?.[index]?.administrationMethod}
                      touched={
                        formik.touched?.[index]?.administrationMethod
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-col">
                        <label>Dosage Prescribed</label>
                        <TextInput
                          id={`medications.[${index}].dosagePrescribed`}
                          type="text"
                          value={
                            formik.values.medications?.[index]
                              ?.dosagePrescribed
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.medications?.[index]
                              ?.dosagePrescribed
                          }
                          touched={
                            formik.touched.medications?.[index]
                              ?.dosagePrescribed
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-col">
                        <label>Frequency</label>
                        <SelectInput
                          id={`medications.[${index}].frequency`}
                          type="select"
                          options={[
                            { value: "Frequency1", label: "Frequency1" },
                            { value: "Frequency2", label: "Frequency2" },
                            { value: "Frequency3", label: "Frequency3" },
                          ]}
                          value={
                            formik.values.medications?.[index]?.frequency
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.medications?.[index]?.frequency
                          }
                          touched={
                            formik.touched.medications?.[index]?.frequency
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-col">
                    <label>Date Started</label>
                    <DateInput
                      label="Select a date"
                      id={`medications.[${index}].dateStarted`}
                      value={
                        formik.values.medications?.[index]?.dateStarted
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.errors.medications?.[index]?.dateStarted
                      }
                      touched={
                        formik.touched.medications?.[index]?.dateStarted
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-col">
                        <label>Actual Dosage Taken</label>
                        <TextInput
                          type="text"
                          id={`medications.[${index}].actualDosage`}
                          value={
                            formik.values.medications?.[index]?.actualDosage
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.medications?.[index]?.actualDosage
                          }
                          touched={
                            formik.touched.medications?.[index]
                              ?.actualDosage
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-col">
                        <label>Frequency</label>
                        <SelectInput
                          type="select"
                          options={[
                            { value: "Frequency1", label: "Frequency1" },
                            { value: "Frequency2", label: "Frequency2" },
                            { value: "Frequency3", label: "Frequency3" },
                          ]}
                          id={`medications.[${index}].frequencyTaken`}
                          value={
                            formik.values.medications?.[index]
                              ?.frequencyTaken
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={
                            formik.errors.medications?.[index]
                              ?.frequencyTaken
                          }
                          touched={
                            formik.touched.medications?.[index]
                              ?.frequencyTaken
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-col">
                    <label>Date Started</label>
                    <DateInput
                      label="Select a date"
                      id={`medications.[${index}].dateStarted`}
                      value={
                        formik.values.medications?.[index]?.dateStarted
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.errors.medications?.[index]?.dateStarted
                      }
                      touched={
                        formik.touched.medications?.[index]?.dateStarted
                      }
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-col mb-0">
                    <label>prescribed for</label>
                    <TextInput
                      type="text"
                      id={`medications.[${index}].prescribedFor`}
                      value={
                        formik.values.medications?.[index]?.prescribedFor
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.errors.medications?.[index]?.prescribedFor
                      }
                      touched={
                        formik.touched.medications?.[index]?.prescribedFor
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          </form>
            <div className="d-flex justify-content-end gap-3">
              <button
                className="btn secondary-black"
                fdprocessedid="wallnk"
                onClick={() => navigate(-1)}
              >
                Close
              </button>
              <button
                className="btn primary-black"
                fdprocessedid="wallnk"
                type="submit"
              >
                Submit
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default SurveySpecificQuestions;
