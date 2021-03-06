import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FaFacebookF, FaLinkedinIn, FaPinterest, FaTwitter} from "react-icons/all";

import "./FooterComp.scss";
import {socialData} from "configs/socialData";

const FooterComp = () => {
  return (
    <Container fluid className="footer-comp d-flex align-items-end justify-content-center">
      <Container fluid className="footer-comp-container d-flex justify-content-center align-items-center">
        {/*<Container className="footer-comp-contact d-flex justify-content-center align-items-center">*/}
        {/*  <Row className="footer-comp-contact-container">*/}
        {/*    <Col lg={7} md={6} sm={12} className="left-side">*/}
        {/*      <h6 className="title">Contact us!</h6>*/}
        {/*      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur maxime*/}
        {/*        nihil repellat unde? Suscipit.</p>*/}
        {/*    </Col>*/}
        {/*    <Col lg={5} md={6} sm={12} className="right-side d-flex justify-content-center align-items-center">*/}
        {/*      <div className="download-app">*/}
        {/*        <button className="download-btn">Download the app</button>*/}
        {/*      </div>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*</Container>*/}
        <Row className="footer-social d-flex justify-content-center align-items-center">
          {
            socialData.map((val, index) => {
              const Icon = val.socialIcon;
              return (
                <a href={val.socialUrl} className="social-item">
                  <Icon/>
                </a>
              );
            })
          }
        </Row>
      </Container>
    </Container>
  );
};

export default FooterComp;