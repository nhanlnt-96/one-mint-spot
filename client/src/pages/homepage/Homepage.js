import React from "react";
import {Container, Row} from "react-bootstrap";
import MainBanner from "components/mainBanner/MainBanner";
import MainAbout from "components/mainAbout/MainAbout";
import MainCollection from "components/mainCollection/MainCollection";
import MainHowItWorks from "components/mainHowItWorks/MainHowItWorks";
import MainService from "components/mainService/MainService";
import MainPortFolio from "components/mainPortfolio/MainPortFolio";
import MainFaq from "components/mainFaq/MainFaq";

const Homepage = () => {
  return (
    <Container fluid style={{backgroundColor: "rgb(227, 228, 255)"}}>
      <Row id="home">
        <MainBanner/>
      </Row>
      <Row id="about">
        <MainAbout/>
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
      {/*<Row id="collection">*/}
      {/*  <MainCollection/>*/}
      {/*</Row>*/}
    </Container>
  );
};

export default Homepage;