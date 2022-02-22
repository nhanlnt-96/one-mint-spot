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
      <div className="drawing d-flex flex-column justify-content-center align-items-center">
        <StepComp title={"drawing"} data={drawingData} icon={DrawingIcon}/>
        <button className="view-more">
          <a href="https://monsejime02.myportfolio.com/nft-collections" target="_blank">See more</a>
        </button>
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