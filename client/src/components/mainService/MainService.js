import React from "react";
import {Container, Row} from "react-bootstrap";
import MainTitle from "components/mainTitle/MainTitle";
import {AssistanceService, CreationService, SiteBuilderService} from "components/mainService/components";

import "./MainService.scss";

const MainService = () => {
  return (
    <Container fluid className="main-service">
      <MainTitle title={"service"}/>
      <Container className="main-service-container">
        <Row className="main-service-container">
          <div className="main-subtitle">
            <h2>creation</h2>
          </div>
          <CreationService/>
        </Row>
        <Row className="main-service-container">
          <div className="main-subtitle">
            <h2>assistance</h2>
          </div>
          <AssistanceService/>
        </Row>
        <Row className="main-service-container">
          <div className="main-subtitle">
            <h2>site builder</h2>
          </div>
          <SiteBuilderService/>
        </Row>
      </Container>
    </Container>
  );
};

export default MainService;