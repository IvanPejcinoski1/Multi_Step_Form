import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FormDataContext } from "../context/FormDataContext";
// Add the following imports after running 'npm install react-bootstrap@latest bootstrap@latest react-router-dom@latest @fortawesome/fontawesome-free':

const Summary = () => {
  const { userData, setUserData, handleUserData } = useContext(FormDataContext);
  const navigate = useNavigate();

  let handleConfirm = () => {
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/submited");
  };

  function showPrice(
    planType: "Arcade" | "Advanced" | "Pro",
    isYearly: boolean
  ): number | string {
    let price: number | string;
    switch (planType) {
      case "Arcade":
        price = isYearly ? userData.arcadePrice * 10 : userData.arcadePrice;
        break;
      case "Advanced":
        price = isYearly ? userData.advancedPrice * 10 : userData.advancedPrice;
        break;
      case "Pro":
        price = isYearly ? userData.proPrice * 10 : userData.proPrice;
        break;
      default:
        price = "Unknown plan";
    }
    return price;
  }

  function totalPrice(callback: any) {
    let sum =
      ((userData.onlineService ? userData.onlineServicePrice : 0) +
        (userData.largerStorage ? userData.largerStoragePrice : 0) +
        (userData.customizableProfile
          ? userData.customizableProfilePrice
          : 0)) *
      (userData.isYearly ? 10 : 1);
    return sum + callback;
  }

  return (
    <Container>
      <Row className="summary">
        <Col lg={12} className="px-4 ">
          <div className="d-flex align-items-center py-3">
            <div>
              <p className="fw-semibold mb-0 pb-2">
                {userData.planType}{" "}
                {userData.isYearly ? "(Yearly)" : "(Monthly)"}
              </p>
              <Link to="/selectPlan" className="link">
                Change
              </Link>
            </div>
            <p className="m-0 flex-grow-1 text-end">
              $ {showPrice(userData.planType, userData.isYearly)}
              {userData.isYearly ? "/yr" : "/mo"}
            </p>
          </div>
          <hr />
          {userData.onlineService}

          {userData.onlineService && (
            <p className="addOnsParagraph">
              Online Service
              <span className="float-end">
                {userData.isYearly
                  ? `$${userData.onlineServicePrice * 10}/yr`
                  : `$${userData.onlineServicePrice}/mo`}
              </span>
            </p>
          )}

          {userData.largerStorage && (
            <p className="addOnsParagraph">
              Larger storage
              <span className="float-end">
                {userData.isYearly
                  ? `$${userData.largerStoragePrice * 10}/yr`
                  : `$${userData.largerStoragePrice}/mo`}
              </span>
            </p>
          )}

          {userData.customizableProfile && (
            <p className="addOnsParagraph">
              Customizable profile{" "}
              <span className="float-end">
                {userData.isYearly
                  ? `$${userData.customizableProfilePrice * 10}/yr`
                  : `$${userData.customizableProfilePrice}/mo`}
              </span>
            </p>
          )}
        </Col>
      </Row>
      <Row>
        <Col className="px-4 mt-3 total">
          <p className="mb-0 py-4">
            Total ({userData.isYearly ? "per year" : "per month"}){" "}
            <span>
              ${totalPrice(showPrice(userData.planType, userData.isYearly))}
              {userData.isYearly ? "/yr" : "/mo"}
            </span>
          </p>
        </Col>
      </Row>
      <Link to="/pickAdd-ons">
        <button className="backButton fw-semibold pb-2">Go Back</button>
      </Link>

      <button
        className="nextButton"
        type="submit"
        id="confirm"
        onClick={handleConfirm}
      >
        Confirm
      </button>
    </Container>
  );
};
export default Summary;
