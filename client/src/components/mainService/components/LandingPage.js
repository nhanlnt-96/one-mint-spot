import React from "react";
import {ServiceTitle} from "components/mainService/components/ServiceTitle";
import Landing from "assets/icons/landing-page.png";
import {Container} from "react-bootstrap";

export const LandingPage = () => {
  return (
    <>
      <ServiceTitle title={"landing page"} titleIcon={Landing}/>
      <Container className="landing-container main-primary-box">
        <div className="desc">Create Front-end design that include:
        </div>
        <ul>
          <li className="desc">Roadmap</li>
          <li className="desc">FAQ</li>
          <li className="desc">About us</li>
          <li className="desc">Description</li>
          <li className="desc">Team</li>
          <li className="desc">Collection</li>
          <li className="desc">Social links</li>
        </ul>
      </Container>
    </>
  );
};