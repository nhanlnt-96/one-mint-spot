import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import MainHeader from "components/mainHeader/MainHeader";
import RightImg from "assets/imgs/banner/rightImg.png";
import {socialData} from "configs/socialData";
import TypewriterComponent from "typewriter-effect";

import "./MainBanner.scss";
import {BsBookmark, FaHeart, FaRegComment, FiSend} from "react-icons/all";

const MainBanner = () => {
  const [showLeftTopContent, setShowLeftTopContent] = useState(false);
  return (
    <Container fluid className="main-banner">
      <MainHeader/>
      <Container className="main-banner-container">
        <Row className="main-banner-content">
          <Col lg={6} md={7} sm={12} className="main-banner-left-side d-flex justify-content-start align-items-center">
            <div className="border-container">
              <div className="side-content d-flex flex-column justify-content-center">
                <TypewriterComponent
                  onInit={(typewriter) => {
                    typewriter.typeString("One mint spot").start().callFunction(() => {
                      setShowLeftTopContent(true);
                    });
                  }}
                />
                <h2 className={`sub-title ${showLeftTopContent && "sub-title-active"}`}>One mint spot is a launchpad
                  that
                  help anyone create a full NFT collection.</h2>
                <h2 className={`sub-title ${showLeftTopContent && "sub-title-active"}`}>We Help in all steps from
                  Drawing
                  to Mint function.</h2>
                <h2 className={`sub-title ${showLeftTopContent && "sub-title-active"}`}>You only need an idea.</h2>
              </div>
              <div className="bottom-content">
                <div className="left">
                  <FaHeart style={{color: "#ff0000"}}/>
                  <FaRegComment/>
                  <FiSend/>
                </div>
                <div className="right d-flex justify-content-end align-content-center">
                  <BsBookmark/>
                </div>
              </div>
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
          <div className="contact-social">
            {
              socialData.map((val, index) => {
                const Icon = val.socialIcon;
                return (
                  <a key={index} href={val.socialUrl} className="social-item">
                    <div className="social-icon">
                      <Icon/>
                    </div>
                    <p className="social-detail">{val.socialId}</p>
                  </a>
                );
              })
            }
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default MainBanner;