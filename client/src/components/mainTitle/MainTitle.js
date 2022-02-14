import React from "react";
import {Container, Row} from "react-bootstrap";

import "./MainTitle.scss";

const MainTitle = ({title}) => {
  return (
    <Container fluid data-aos="fade-down" className="main-title">
      <Row className="main-title-container d-flex justify-content-center align-items-center">
        <div className="main-title-content d-flex justify-content-center align-items-center">
          <h2 className="title">{title}</h2>
        </div>
      </Row>
    </Container>
  );
};

export default MainTitle;