import React from "react";
import {ServiceTitle} from "components/mainService/components/ServiceTitle";
import {Container, Row} from "react-bootstrap";
import {BsChevronDoubleDown} from "react-icons/all";

export const StepComp = ({
                          title,
                          data,
                          icon
                        }) => {
  return (
    <>
      <ServiceTitle title={title} titleIcon={icon}/>
      <Container className="drawing-container">
        <Row className="drawing-content">
          {
            data.map((val, index) => (
              <>
                <div data-aos="fade-up" key={index}
                     className="drawing-item justify-content-center align-items-center">
                  <div className="drawing-step d-flex justify-content-center align-items-center">
                    <div className="number">{index + 1}</div>
                  </div>
                  <div className="drawing-desc">
                    <div className="desc">{val}</div>
                  </div>
                </div>
                {
                  !(data.length === index + 1) && (
                    <div data-aos="fade-up" className="next-step-icon">
                      <BsChevronDoubleDown/>
                    </div>
                  )
                }
              </>
            ))
          }
        </Row>
      </Container>
    </>
  );
};