import React from "react";
import {Accordion, Container} from "react-bootstrap";
import MainTitle from "components/mainTitle/MainTitle";
import {videoLibraryData} from "configs/videoLibraryData";
import {VideoPlayer} from "components/mainVideoLibrary/components";

import "./MainVideoLibrary.scss";

const MainVideoLibrary = () => {
  return (
    <Container fluid className="main-video">
      <MainTitle title={"Video Library"}/>
      <Container className="main-video-container">
        {/*{*/}
        {/*  videoLibraryData.map((val, index) => (*/}
        {/*    <div className="main-video-item">*/}
        {/*      <div className="main-subtitle">*/}
        {/*        <h2>{val.label}</h2>*/}
        {/*      </div>*/}
        {/*      <div className="video-container">*/}
        {/*        <VideoPlayer videoUrl={val.videoUrl} imgIntro={val.posterImg}/>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  ))*/}
        {/*}*/}
        <Accordion className="accordion-custom-container">
          {
            videoLibraryData.map((val, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header className="accordion-header-custom">{val.label}</Accordion.Header>
                <Accordion.Body className="accordion-body-custom">
                  <VideoPlayer videoUrl={val.videoUrl} imgIntro={val.posterImg}/>
                </Accordion.Body>
              </Accordion.Item>
            ))
          }
        </Accordion>
      </Container>
    </Container>
  );
};

export default MainVideoLibrary;