import React from "react";
import {ServiceTitle} from "components/mainService/components/ServiceTitle";
import NFT from "assets/icons/nft.png";
import {Container, Row} from "react-bootstrap";

export const GenerateNFT = () => {
  return (
    <>
      <ServiceTitle title={"generate nft"} titleIcon={NFT}/>
      <Container className="generate-nft-container">
        <Row className="generate-nft-content">
          <div className="desc">Generate NFT from layers design.</div>
        </Row>
      </Container>
    </>
  );
};