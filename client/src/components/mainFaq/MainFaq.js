import React from "react";
import {Accordion, Container} from "react-bootstrap";
import MainTitle from "components/mainTitle/MainTitle";

import "./MainFaq.scss";
import {faqData} from "configs/faqData";

const MainFaq = () => {
  return (
    <Container fluid className="main-faq">
      <MainTitle title={"faq"}/>
      <Container className="main-faq-container">
        <Accordion>
          {
            faqData.map((val, index) => (
              <Accordion.Item key={index} data-aos="fade-up" eventKey={index.toString()}>
                <Accordion.Header className="accordion-header-custom">{val.question}</Accordion.Header>
                <Accordion.Body className="accordion-body-custom">{val.answer}</Accordion.Body>
              </Accordion.Item>
            ))
          }
        </Accordion>
      </Container>
    </Container>
  );
};

export default MainFaq;