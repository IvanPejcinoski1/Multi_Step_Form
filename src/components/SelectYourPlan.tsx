import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
// Add the following imports after running 'npm install react-bootstrap@latest bootstrap@latest react-router-dom@latest @fortawesome/fontawesome-free':
import { FormDataContext } from "../context/FormDataContext";

const SelectYourPlan = () => {
  const { userData, setUserData, handleUserData } = useContext(FormDataContext);

  const handlePlanTypeClick = (planType: any) => {
    setUserData({ ...userData, planType: planType });
  };
  return (
    <Container className="pt-4">
      <Row className="flex-column flex-lg-row">
        <Col
          className={`planOption mb-3 mb-lg-0 d-flex d-lg-block align-items-center me-2  ${
            userData.planType === "Arcade" && "activePlanOption "
          }`}
          name="planType"
          onClick={() => handlePlanTypeClick("Arcade")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/Arcade.png`}
            alt="slika"
          />
          <div className="px-4 py-3 px-lg-0 py-lg-0">
            <p className="pb-0 mb-0 fw-semibold">Arcade</p>
            <span>
              {userData.isYearly
                ? `$${userData.arcadePrice * 10}/yr`
                : `$${userData.arcadePrice}/mo`}
            </span>

            {userData.isYearly && (
              <span className="d-block free">2 months free</span>
            )}
          </div>
        </Col>
        <Col
          className={`planOption mb-3 mb-lg-0 d-flex d-lg-block align-items-center mx-lg-2 ${
            userData.planType === "Advanced" && "activePlanOption "
          }`}
          name="planType"
          onClick={() => handlePlanTypeClick("Advanced")}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/Advanced.png`}
            alt="slika"
          />
          <div className="px-4 py-3 px-lg-0 py-lg-0">
            <p className="pb-0 mb-0 fw-semibold">Advanced</p>
            <span>
              {userData.isYearly
                ? `$${userData.advancedPrice * 10}/yr`
                : `$${userData.advancedPrice}/mo`}
            </span>
            {userData.isYearly && (
              <span className="d-block free">2 months free</span>
            )}
          </div>
        </Col>
        <Col
          className={`planOption mb-3 mb-lg-0 d-flex d-lg-block align-items-center mx-lg-2 ${
            userData.planType === "Pro" && "activePlanOption "
          }`}
          name="planType"
          onClick={() => handlePlanTypeClick("Pro")}
        >
          <img src={`${process.env.PUBLIC_URL}/images/Pro.png`} alt="slika" />
          <div className="px-4 py-3 px-lg-0 py-lg-0">
            <p className="pb-0 mb-0 fw-semibold">Pro</p>
            <span>
              {userData.isYearly
                ? `$${userData.proPrice * 10}/yr`
                : `$${userData.proPrice}/mo`}
            </span>
            {userData.isYearly && (
              <span className="d-block free">2 months free</span>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="toggleContainer mb-4 mb-lg-0">
          <span
            className={`pe-4 fw-semibold toggler ${
              !userData.isYearly && "activePlan"
            }`}
          >
            {" "}
            Monthly
          </span>
          <label className="switch">
            <input
              type="checkbox"
              name="isYearly"
              id="isYearly"
              checked={userData.isYearly}
              onChange={handleUserData}
            />
            <span className="slider round"></span>
          </label>
          <span
            className={`ps-4 fw-semibold toggler ${
              userData.isYearly && "activePlan"
            }`}
          >
            {" "}
            Yearly
          </span>
        </Col>
      </Row>
      <Link to="/">
        <button className="backButton fw-semibold pb-2">Go Back</button>
      </Link>
      <Link to="/pickAdd-ons">
        <button className="nextButton " type="submit">
          Next Step
        </button>
      </Link>
    </Container>
  );
};
export default SelectYourPlan;
