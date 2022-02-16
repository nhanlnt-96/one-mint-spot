import React from "react";
import {Container} from "react-bootstrap";

export const ServiceTitle = ({
                               title,
                               titleIcon
                             }) => {
  return (
    <Container fluid className="service-title d-flex justify-content-center align-items-center">
      <div className="service-title-container d-flex flex-column justify-content-center align-items-center">
        <div className="title-icon d-flex justify-content-center align-items-center">
          <img src={titleIcon} alt="landz"/>
        </div>
        <h2 className="title">{title}</h2>
      </div>
    </Container>
  );
};