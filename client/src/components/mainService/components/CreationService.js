import React from "react";
import {Container} from "react-bootstrap";
import {StepComp, GenerateNFT, LandingPage} from "components/mainService/components";
import DrawingIcon from "assets/icons/drawing.png";
import {drawingData} from "configs/drawingData";
import MintFuncIcon from "assets/icons/mint.png";
import {mintFuncData} from "configs/mintFuncData";

export const CreationService = () => {
  return (
    <Container fluid className="creation-service">
      <div className="drawing">
        <StepComp title={"drawing"} data={drawingData} icon={DrawingIcon}/>
      </div>
      <div data-aos="fade-up" className="generate-nft">
        <GenerateNFT/>
      </div>
      <div data-aos="fade-up" className="landing-page">
        <LandingPage/>
      </div>
      <div data-aos="fade-up" className="mint-function">
        <StepComp title={"mint function"} icon={MintFuncIcon} data={mintFuncData}/>
      </div>
    </Container>
  );
};