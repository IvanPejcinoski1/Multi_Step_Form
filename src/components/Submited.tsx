import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
// Add the following imports after running 'npm install react-bootstrap@latest bootstrap@latest react-router-dom@latest @fortawesome/fontawesome-free':

const Sumbited = () => {
  return (
    <Container>
      <Row>
        <img
          src={`${process.env.PUBLIC_URL}/images/Ok.png`}
          alt="slika"
          id="OKimage"
          className="mx-auto"
        />
      </Row>
    </Container>
  );
};
export default Sumbited;
