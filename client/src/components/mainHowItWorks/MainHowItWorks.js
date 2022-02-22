import React from "react";
import {Container, Row} from "react-bootstrap";
import MainTitle from "components/mainTitle/MainTitle";
import {howItWorksData} from "configs/howItWorksData";

import "./MainHowItWorks.scss";

const MainHowItWorks = () => {
  return (
    <Container className="main-how">
      <MainTitle title={"How that works"}/>
      <Container className="main-how-container">
        <Row className="main-how-content justify-content-center align-items-center">
          {
            howItWorksData.map((val, index) => (
              <div data-aos="zoom-in" key={index} className="step-item">
                <div className="step-container d-flex flex-column justify-content-center align-items-center">
                  <div className="step-img">
                    <img src={val.img} alt="landz"/>
                  </div>
                  <div className="step-desc d-flex flex-column justify-content-center align-items-center">
                    <div className="step-number d-flex justify-content-center align-items-center">
                      <div className="number">{val.step}</div>
                    </div>
                    <div className="step-content">
                      <div className="content-text">{val.content}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default MainHowItWorks;