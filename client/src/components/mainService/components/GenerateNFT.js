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
          <div className="desc">We create the NFT from layers design and create the metadata needed then we take care of
            IPFS upload.
          </div>
        </Row>
      </Container>
    </>
  );
};