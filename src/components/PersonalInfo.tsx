import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FormDataContext } from "../context/FormDataContext";
// Add the following imports after running 'npm install react-bootstrap@latest bootstrap@latest react-router-dom@latest @fortawesome/fontawesome-free':

const PersonalInfo = () => {
  const { userData, setUserData, handleUserData } = useContext(FormDataContext);

  const [nextStep, setNextStep] = useState(false);
  const navigate = useNavigate();

  const nameRegex = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+\d{10,12}$/;

  console.log(
    userData.email === "" || (!emailRegex.test(userData.email) && nextStep)
  );
  console.log(userData.email === "");
  console.log(emailRegex.test(""));

  console.log(nextStep);
  console.log(!emailRegex);

  const handleNextStep = () => {
    setNextStep(true);
    if (
      userData.name &&
      userData.email &&
      userData.phone &&
      nameRegex.test(userData.name) &&
      emailRegex.test(userData.email) &&
      phoneRegex.test("+" + userData.phone)
    ) {
      console.log("why here");

      navigate("/selectPlan");
    }
  };

  return (
    <>
      <form action="">
        <label htmlFor="name" className="fw-semibold pb-2 mt-3">
          Name
        </label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          className="form-control  mb-2 basicInfoInput"
          placeholder="e.g. Stephen King"
          value={userData.name}
          onChange={handleUserData}
        />
        {nextStep &&
          (userData.name === "" || !nameRegex.test(userData.name)) && (
            <span className="float-end required fw-semibold">
              {userData.name === ""
                ? "This field is required"
                : "Please enter valid name"}
            </span>
          )}{" "}
        <br />
        <label htmlFor="email " className="fw-semibold pb-2">
          Email Adress
        </label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          className="form-control  mb-2 basicInfoInput"
          placeholder="e.g. stephenking@lorem.com"
          value={userData.email}
          onChange={handleUserData}
        />
        {nextStep &&
          (userData.email === "" || !emailRegex.test(userData.email)) && (
            <span className="float-end required fw-semibold">
              {userData.email === ""
                ? "This field is required"
                : "Please enter valid email"}
            </span>
          )}{" "}
        <br />
        <label htmlFor="phone" className="fw-semibold pb-2">
          Phone Number
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          className="form-control  mb-2 basicInfoInput"
          placeholder="e.g. +1 234 567 890"
          value={userData.phone}
          onChange={handleUserData}
        />
        {nextStep &&
          (userData.phone === "" || !phoneRegex.test("+" + userData.phone)) && (
            <span className="float-end required fw-semibold">
              {userData.phone === ""
                ? "This field is required"
                : "Please enter valid phone"}
            </span>
          )}{" "}
        <br />
      </form>
      <button className="nextButton" onClick={handleNextStep}>
        Next Step
      </button>
    </>
  );
};
export default PersonalInfo;
