import React from "react";
import {ServiceTitle} from "components/mainService/components/ServiceTitle";
import Landing from "assets/icons/landing-page.png";
import {Container, Row} from "react-bootstrap";
import {landingPageData} from "configs/landingPageData";

export const LandingPage = () => {
  return (
    <>
      <ServiceTitle title={"landing page"} titleIcon={Landing}/>
      <Container className="landing-container">
        <Row className="landing-content-intro">
          <div className="desc">Create Front-end design that include:</div>
        </Row>
        <Row className="landing-content">
          {
            landingPageData.map((val, index) => (
              <div key={index} className="service-box">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img src={val.icon} alt=""/>
                </div>
                <div className="content">
                  <h6 className="label">{val.label}</h6>
                  <p className="desc">{val.desc}</p>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </>
  );
};