import FormDeseign from "./components/FormDeseign";
import "./App.scss";
import { Link, Route, Routes } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { FormDataContext } from "./context/FormDataContext";
import PersonalInfo from "./components/PersonalInfo";
import SelectYourPlan from "./components/SelectYourPlan";
import PickAddsOn from "./components/PickAddsOn";
import Summary from "./components/Summary";
import Submited from "./components/Submited";

function App() {
  const { personalInfo, setPersonalInfo, handlePersonalInfo } =
    useContext(FormDataContext);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <FormDeseign
              header="Personal Info"
              subheader="Please Provide your name, email address, and phone number."
            >
              <PersonalInfo />
            </FormDeseign>
          }
        />
        <Route
          path="/selectPlan"
          element={
            <FormDeseign
              header="Select your plan"
              subheader="You have the option of monthly or yearly billing"
            >
              <SelectYourPlan />
            </FormDeseign>
          }
        />
        <Route
          path="/pickAdd-ons"
          element={
            <FormDeseign
              header="Pick add-ons"
              subheader="Add-ons help enhance your gaming experience"
            >
              <PickAddsOn />
            </FormDeseign>
          }
        />
        <Route
          path="/summary"
          element={
            <FormDeseign
              header="Finishing up"
              subheader="Double-check everything looks OK before confirming"
            >
              <Summary />
            </FormDeseign>
          }
        />
        <Route
          path="/submited"
          element={
            <FormDeseign
              header="Thank you!"
              subheader="Thanks for confirming your subscripiton! We hope you have fun using our 
              platform. IF you ever need support,  please feel free to  email 
              us at support@loremgaming.com"
              isSubmiting={true}
            >
              <Submited />
            </FormDeseign>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
