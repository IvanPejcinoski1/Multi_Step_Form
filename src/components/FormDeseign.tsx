import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormDataContext } from "../context/FormDataContext";
// Add the following imports after running 'npm install react-bootstrap@latest bootstrap@latest react-router-dom@latest @fortawesome/fontawesome-free':

interface Props {
  children: React.ReactNode;
  header: string;
  subheader: string;
  isSubmiting?: boolean;
}

const FormDeseign = (props: Props) => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center backgroundContainer"
    >
      <Row className="bg-white  formRow p-3">
        <Col lg={4} className="mainImage">
          <Row
            className={`pt-5 stepsContainer align-items-center justify-content-center ps-3`}
          >
            <Col lg={2} xs={2}>
              <div
                className={`circleDiv mx-auto  ${
                  window.location.pathname == "/" && "activeStep"
                }`}
              >
                1
              </div>
            </Col>
            <Col
              lg={10}
              className={`text-start stepInfo py-2  dispay-xs-none d-lg-block`}
            >
              <p className="p-0 m-0 stepNumberparagraph">STEP 1</p>
              <h5 className="text-white">YOUR INFO</h5>
            </Col>
            <Col lg={2} xs={2}>
              <div
                className={`circleDiv mx-auto  ${
                  window.location.pathname == "/selectPlan" && "activeStep"
                }`}
              >
                2
              </div>
            </Col>
            <Col
              lg={10}
              className={`text-start stepInfo py-2  dispay-xs-none d-lg-block`}
            >
              <p className="p-0 m-0 stepNumberparagraph">STEP 2</p>
              <h5 className="text-white">SELECT PLAN</h5>
            </Col>
            <Col lg={2} xs={2}>
              <div
                className={`circleDiv mx-auto  ${
                  window.location.pathname == "/pickAdd-ons" && "activeStep"
                }`}
              >
                3
              </div>
            </Col>
            <Col
              lg={10}
              className={`text-start stepInfo py-2  dispay-xs-none d-lg-block`}
            >
              <p className="p-0 m-0 stepNumberparagraph">STEP 3</p>
              <h5 className="text-white">ADD-ONS</h5>
            </Col>
            <Col lg={2} xs={2}>
              <div
                className={`circleDiv mx-auto  ${
                  window.location.pathname == "/summary" && "activeStep"
                }`}
              >
                4
              </div>
            </Col>
            <Col
              lg={10}
              className={`text-start stepInfo py-2  dispay-xs-none d-lg-block`}
            >
              <p className="p-0 m-0 stepNumberparagraph">STEP 4</p>
              <h5 className="text-white">SUMMARY</h5>
            </Col>
          </Row>
        </Col>
        <Col
          lg={8}
          className={` px-3 p-lg-5 d-flex childrenContent ${
            props.isSubmiting
              ? "flex-column-reverse justify-content-center text-center"
              : "flex-column text-start"
          }
          `}
        >
          <div
            className={`innerContent ${
              window.location.pathname === "/submited" &&
              "d-flex  flex-column-reverse"
            }`}
          >
            <div>
              <h1 className="bold header ">{props.header}</h1>
              <p className="subheader">{props.subheader}</p>
            </div>
            {props.children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default FormDeseign;
