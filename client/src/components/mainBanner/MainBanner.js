import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainHeader from "components/mainHeader/MainHeader";
import RightImg from "assets/imgs/banner/rightImg.png";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/all";

import "./MainBanner.scss";

const MainBanner = () => {
  return (
    <Container fluid className="main-banner">
      <MainHeader/>
      <Container className="main-banner-container">
        <Row className="main-banner-content">
          <Col lg={6} md={7} sm={12} className="main-banner-left-side d-flex justify-content-end align-items-center">
            <div className="side-content d-flex flex-column justify-content-center">
              <h1 className="side-title">Lorem ipsum dolor.</h1>
              <h2 className="sub-title">One mint spot is a launchpad that help anyone create a full NFT
                collection.</h2>
              <h2 className="sub-title">We Help in all steps from Drawing to Mint function.</h2>
              <h2 className="sub-title">You only need an idea.</h2>
            </div>
          </Col>
          <Col lg={6}
               md={5}
               sm={12}
               className="main-banner-right-side d-flex justify-content-center align-items-center">
            <img src={RightImg} alt=""/>
          </Col>
        </Row>
        <Row className="main-banner-contact">
          <div className="address-container d-flex justify-content-center">
            <p className="address-item">Lorem ipsum dolor sit amet.</p>
            <a href="tel:123456789" className="phone">+123 456 789 0</a>
          </div>
          <div className="contact-social">
            <a href="#" className="social-item">
              <div className="social-icon">
                <FaInstagram/>
              </div>
              <p className="social-detail">instagram</p>
            </a>
            <a href="#" className="social-item">
              <div className="social-icon">
                <FaFacebookF/>
              </div>
              <p className="social-detail">facebook</p>
            </a>
            <a href="#" className="social-item">
              <div className="social-icon">
                <FaTwitter/>
              </div>
              <p className="social-detail">twitter</p>
            </a>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default MainBanner;