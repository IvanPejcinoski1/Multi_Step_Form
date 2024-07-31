import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FormDataContext } from "../context/FormDataContext";
// Add the following imports after running 'npm install react-bootstrap@latest bootstrap@latest react-router-dom@latest @fortawesome/fontawesome-free':

const PickAddsOn = () => {
  const { userData, setUserData, handleUserData } = useContext(FormDataContext);

  return (
    <Container>
      <Row className="pb-4 pt-4">
        <Col
          className={`d-flex align-items-center addOns ${
            userData.onlineService && "activeAddons"
          }`}
        >
          <input
            type="checkbox"
            name="onlineService"
            id="onlineService"
            className="mx-2 ms-4 "
            checked={userData.onlineService}
            onChange={handleUserData}
          />
          <label
            className="px-4 d-flex align-items-center flex-grow-1"
            htmlFor="onlineService"
          >
            <div>
              <p className="pb-0 mb-1">Online service</p>
              <span className="addOnsDescription">
                Access to multiplayer games{" "}
              </span>
            </div>
            <span className="flex-grow-1 text-end pe-3">
              {userData.isYearly
                ? `$${userData.onlineServicePrice * 10}/yr`
                : `$${userData.onlineServicePrice}/mo`}
            </span>
          </label>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col
          className={`d-flex align-items-center addOns ${
            userData.largerStorage && "activeAddons"
          }`}
        >
          <input
            type="checkbox"
            name="largerStorage"
            id="largerStorage"
            className="mx-2 ms-4 "
            checked={userData.largerStorage}
            onChange={handleUserData}
          />
          <label
            className="px-4 d-flex align-items-center flex-grow-1"
            htmlFor="largerStorage"
          >
            <div>
              <p className="pb-0 mb-1">Larger storage</p>
              <span className="addOnsDescription">
                Extra 1TB of cloud save{" "}
              </span>
            </div>
            <span className="flex-grow-1 text-end pe-3">
              {userData.isYearly
                ? `$${userData.largerStoragePrice * 10}/yr`
                : `$${userData.largerStoragePrice}/mo`}
            </span>
          </label>
        </Col>
      </Row>
      <Row className="pb-4">
        <Col
          className={`d-flex align-items-center addOns ${
            userData.customizableProfile && "activeAddons"
          }`}
        >
          <input
            type="checkbox"
            name="customizableProfile"
            id="customizableProfile"
            className="mx-2 ms-4 "
            checked={userData.customizableProfile}
            onChange={handleUserData}
          />
          <label
            className="px-4 d-flex align-items-center flex-grow-1"
            htmlFor="customizableProfile"
          >
            <div>
              <p className="pb-0 mb-1">Customizable profile</p>
              <span className="addOnsDescription">
                Custom theme on your profile{" "}
              </span>
            </div>
            <span className="flex-grow-1 text-end pe-3">
              {" "}
              {userData.isYearly
                ? `$${userData.customizableProfilePrice * 10}/yr`
                : `$${userData.customizableProfilePrice}/mo`}
            </span>
          </label>
        </Col>
        <Link to="/selectPlan">
          <button className="backButton fw-semibold pb-2">Go Back</button>
        </Link>
        <Link to="/summary">
          <button className="nextButton " type="submit">
            Next Step
          </button>
        </Link>
      </Row>
    </Container>
  );
};
export default PickAddsOn;
