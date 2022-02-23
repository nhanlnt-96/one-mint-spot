import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {StepComp, GenerateNFT, LandingPage, ShowAllImgModal} from "components/mainService/components";
import DrawingIcon from "assets/icons/drawing.png";
import {drawingData} from "configs/drawingData";
import MintFuncIcon from "assets/icons/mint.png";
import {mintFuncData} from "configs/mintFuncData";
import {drawingImgData} from "configs/drawingImgData";
import SlideShow from "components/slideShow/SlideShow";

export const CreationService = () => {
  const [show, setShow] = useState(false);
  return (
    <Container fluid className="creation-service">
      <div className="drawing d-flex flex-column justify-content-center align-items-center">
        <StepComp title={"drawing"} data={drawingData} icon={DrawingIcon}/>
        <div className="drawing-img-container d-flex flex-column justify-content-center align-items-center">
          <SlideShow imgData={drawingImgData}/>
        </div>
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
      <ShowAllImgModal show={show} setShow={setShow} data={drawingImgData}/>
    </Container>
  );
};