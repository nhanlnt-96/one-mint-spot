import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import AboutImg from "assets/imgs/ex1.jpeg";
import MainTitle from "components/mainTitle/MainTitle";

import "./MainAbout.scss";

const MainAbout = () => {
  return (
    <Container fluid className="main-about">
      <MainTitle title={"About"}/>
      <Container className="main-about-container d-flex justify-content-center align-items-center">
        <Row data-aos="fade-up" className="main-about-content main-primary-box">
          <Col lg={5} md={4} sm={12} className="about-left-side d-flex justify-content-center align-items-center">
            <div className="img-container">
              <img data-aos="zoom-in" src={AboutImg} alt="landz"/>
            </div>
          </Col>
          <Col lg={7} md={8} sm={12}
               className="about-right-side d-flex justify-content-center align-items-center">
            <div
              data-aos="fade-right" className="content">One mint spot is a launchpad that help anyone create a full NFT
              collection<br/>
              We Help in all steps from Drawing to mint Function<br/>
              You only need an idea .
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MainAbout;