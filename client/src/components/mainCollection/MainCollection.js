import React from "react";
import MainTitle from "components/mainTitle/MainTitle";
import Collection1 from "assets/imgs/ex1.jpeg";
import Collection2 from "assets/imgs/ex2.jpeg";
import Collection3 from "assets/imgs/ex3.jpeg";
import {Container, Row} from "react-bootstrap";

import "./MainCollection.scss";

const collectionImg = [Collection1, Collection2, Collection3,Collection1];

const MainCollection = () => {
  return (
    <Container fluid className="main-collection">
      <MainTitle title={"The Estates’ NFT Collection"}/>
      <Container className="main-collection-container container">
        <Row data-aos="fade-up" className="main-collection-content main-primary-box">
          {
            collectionImg.map((val, index) => (
              <div className="img-container">
                <img data-aos="fade-left" src={val} alt="landz-collection"/>
              </div>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default MainCollection;