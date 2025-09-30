import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./assets/scss/index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS

import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { API_URL, BASE_PATH } from "./config";
import PublicLayout from "./layouts/public";

// Lazy load the components
const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/Signup"));
const CheckEmail = lazy(() => import("./pages/CheckEmail"));
const SignIn = lazy(() => import("./pages/Signin"));
const HomePage = lazy(() => import("./pages/HomePage"));
const DataSharingConsent = lazy(() => import("./pages/DataSharingConsent"));
const Surveys = lazy(() => import("./pages/Surveys"));
const SurveyLanding = lazy(() => import("./pages/SurveyLanding"));
const ProfileQuestions = lazy(() => import("./pages/ProfileQuestions"));
const SurveySpecificQuestions = lazy(() =>
  import("./pages/SurveySpecificQuestions")
);
const SatisfactionSurveyQuestions = lazy(() =>
  import("./pages/SatisfactionSurveyQuestions")
);
const FinalThoughts = lazy(() => import("./pages/FinalThoughts"));
const CollectorSignature = lazy(() => import("./pages/CollectorSignature"));
const ThankYou = lazy(() => import("./pages/ThankYou"));

function App() {
  console.log(API_URL, BASE_PATH);

  return (
    <Provider store={store}>
      <Router basename={BASE_PATH}>
        {/* Suspense component to handle fallback loading state */}
        <Suspense fallback={<div>Loading...</div>}>
          <PublicLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/check-email" element={<CheckEmail />} />
              <Route path="/home-page" element={<HomePage />} />
              <Route
                path="/data-sharing-consent"
                element={<DataSharingConsent />}
              />
              <Route path="/surveys" element={<Surveys />} />
              <Route path="/survey-landing" element={<SurveyLanding />} />
              <Route path="/profile-questions" element={<ProfileQuestions />} />
              <Route
                path="/survey-specific-questions"
                element={<SurveySpecificQuestions />}
              />
              <Route
                path="/satisfaction-survey-questions"
                element={<SatisfactionSurveyQuestions />}
              />
              <Route path="/final-thoughts" element={<FinalThoughts />} />
              <Route
                path="/collector-signature"
                element={<CollectorSignature />}
              />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </PublicLayout>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
