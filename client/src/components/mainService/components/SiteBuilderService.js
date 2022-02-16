import React from "react";
import {Container, Row} from "react-bootstrap";

export const SiteBuilderService = () => {
  return (
    <Container fluid className="site-builder-container">
      <Row className="site-builder-content d-flex align-items-center">
        <div className="desc">This is the new features that allow you to modify your site whatever you want</div>
      </Row>
    </Container>
  );
};