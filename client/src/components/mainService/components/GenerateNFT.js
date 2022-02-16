import React from "react";
import {ServiceTitle} from "components/mainService/components/ServiceTitle";
import NFT from "assets/icons/nft.png";
import {Container} from "react-bootstrap";

export const GenerateNFT = () => {
  return (
    <>
      <ServiceTitle title={"generate nft"} titleIcon={NFT}/>
      <Container className="generate-nft-container">
        <div className="desc">Generate NFT from layers design</div>
      </Container>
    </>
  );
};