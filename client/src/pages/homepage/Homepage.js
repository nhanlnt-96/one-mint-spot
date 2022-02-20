import React from "react";
import {Container, Row} from "react-bootstrap";
import MainBanner from "components/mainBanner/MainBanner";
import MainHowItWorks from "components/mainHowItWorks/MainHowItWorks";
import MainService from "components/mainService/MainService";
import MainPortFolio from "components/mainPortfolio/MainPortFolio";
import MainFaq from "components/mainFaq/MainFaq";
import MainVideoLibrary from "components/mainVideoLibrary/MainVideoLibrary";
import FooterComp from "components/footerComp/FooterComp";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <Container fluid className="homepage-container">
      <Row id="home">
        <MainBanner/>
      </Row>
      <Row id="how-it-works">
        <MainHowItWorks/>
      </Row>
      <Row id="service">
        <MainService/>
      </Row>
      <Row id="portfolio">
        <MainPortFolio/>
      </Row>
      <Row id="faq">
        <MainFaq/>
      </Row>
      <Row id="video">
        <MainVideoLibrary/>
      </Row>
      <Row>
        <FooterComp/>
      </Row>
    </Container>
  );
};

export default Homepage;