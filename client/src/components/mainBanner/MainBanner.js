import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Shape2 from "assets/imgs/bannerShape2.png";
import MainHeader from "components/mainHeader/MainHeader";
import BannerImg from "assets/imgs/bgBanner.png";
import LoadingGif from "assets/gifs/loading.gif";

import "./MainBanner.scss";
import {useSelector} from "react-redux";
import MintBoxComp from "components/mintBox/MintBoxComp";

const MainBanner = () => {
  const blockchain = useSelector((state) => state.blockchain);
  const [bntActive, setBtnActive] = useState(false);
  const [bannerBtnName, setBannerBtnName] = useState("join us");
  const onJoinUsBtnClick = () => {
    setBtnActive(true);
    setBannerBtnName("thanks");
  };
  return (
    <Container fluid className="main-banner">
      <img src={Shape2} alt="banner-shape" className="shape2"/>
      <MainHeader/>
      <Container className="main-banner-container d-flex justify-content-center align-items-center">
        <Row className="main-banner-content">
          <Col lg={7} md={6} sm={12}
               className="main-banner-left-side d-flex flex-column justify-content-center align-items-center">
            <div className="main-banner-title">
              <div data-aos="zoom-in" className="title">WELCOME TO THIS WEBSITE FOR NFT’S</div>
            </div>
            <div className="main-banner-subtitle">
              <div data-aos="fade-down" className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloremque
                exercitationem fuga iste molestiae molestias odit perspiciatis porro sunt tempore voluptatum!
              </div>
            </div>
            <div data-aos="zoom-in" className="main-primary-button">
              <button className={`button-item  ${bntActive && "active"}`} onClick={onJoinUsBtnClick}>
                <p className="button-name">{bannerBtnName}</p>
                <div className="button-icon d-flex justify-content-center align-items-center">
                  <img src={LoadingGif} alt="banner-connecting-to-wallet"/>
                </div>
              </button>
            </div>
          </Col>
          <Col lg={5} md={6} sm={12}
               className="main-banner-right-side d-flex justify-content-center align-items-center">
            {
              !blockchain.account ? (
                <div data-aos="zoom-in" className="main-banner-img">
                  <img src={BannerImg} alt="banner-img"/>
                </div>
              ) : (
                <MintBoxComp/>
              )
            }
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MainBanner;