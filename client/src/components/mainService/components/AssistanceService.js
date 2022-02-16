import React from "react";
import {Container, Row} from "react-bootstrap";
import {assistanceData} from "configs/assistanceData";

export const AssistanceService = () => {
  return (
    <Container fluid className="assistance-service-container">
      <Row className="assistance-service-content">
        <div className="assistance-content-container">
          {
            assistanceData.map((val, index) => (
              <div data-aos="zoom-in" key={index} className="content-item">
                <div className="content-number d-flex justify-content-center align-items-center">
                  <p className="number">{index + 1}</p>
                </div>
                <p className="content">{val}</p>
              </div>
            ))
          }
        </div>
      </Row>
    </Container>
  );
};