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
            <p
              data-aos="fade-right" className="content">Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Adipisci aspernatur commodi consequatur deleniti eaque eos esse est et explicabo facilis
              fugiat impedit labore nam nulla, quibusdam quis recusandae temporibus. Accusamus aspernatur atque, cum
              dignissimos distinctio doloribus ducimus, earum harum illum ipsa iste neque nisi, numquam officia porro
              praesentium suscipit voluptates.</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MainAbout;