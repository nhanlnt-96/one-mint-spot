import React from "react";
import {Container, Row} from "react-bootstrap";
import MainBanner from "components/mainBanner/MainBanner";
import MainAbout from "components/mainAbout/MainAbout";
import MainCollection from "components/mainCollection/MainCollection";
import MainHowItWorks from "components/mainHowItWorks/MainHowItWorks";

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
      {/*<Row id="collection">*/}
      {/*  <MainCollection/>*/}
      {/*</Row>*/}
    </Container>
  );
};

export default Homepage;