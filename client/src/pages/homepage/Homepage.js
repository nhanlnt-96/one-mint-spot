import React from "react";
import {Container, Row} from "react-bootstrap";
import MainBanner from "components/mainBanner/MainBanner";

const Homepage = () => {
  return (
    <Container fluid style={{backgroundColor: "rgb(227, 228, 255)"}}>
      <Row id="home">
        <MainBanner/>
      </Row>
    </Container>
  );
};

export default Homepage;