import React from "react";
import {Container} from "react-bootstrap";

import "./SlideShow.scss";

const SlideShow = ({imgData}) => {
  return (
    <Container className="slideshow-comp" fluid>
      <div className="slideshow-comp-slider">
        <div className="slideshow-comp-track"
             style={{width: `calc(250px * ${imgData.length * 2})`}}>
          {
            imgData.map((val, index) => (
              <div key={index} className="slideshow-comp-slide">
                <img src={val} alt="one-mint-spot"/>
              </div>
            ))
          }
          {
            imgData.map((val, index) => (
              <div key={index} className="slideshow-comp-slide">
                <img src={val} alt="one-mint-spot"/>
              </div>
            ))
          }
        </div>
      </div>
    </Container>
  );
};

export default SlideShow;