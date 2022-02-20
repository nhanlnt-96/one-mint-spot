import React, {useState} from "react";
import {Container} from "react-bootstrap";
import MainTitle from "components/mainTitle/MainTitle";
import {portfolioData} from "configs/portfolioData";
import {SitePreviewModal} from "components/mainPortfolio/components";

import "./MainPortfolio.scss";

const MainPortFolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [siteNameToShow, setSiteNameToShow] = useState("");
  const [siteUrlToShow, setSiteUrlToShow] = useState("");
  const onPreviewSiteBtnClick = (siteName, siteUrl) => {
    setShowModal(true);
    setSiteNameToShow(siteName);
    setSiteUrlToShow(siteUrl);
  };
  return (
    <Container fluid className="main-portfolio">
      <MainTitle title={"portfolio"}/>
      <Container className="main-portfolio-container">
        {
          portfolioData.map((val, index) => (
            <div data-aos="zoom-in" key={index} className="project-item">
              <div className="project-img-preview">
                <img src={val.preview} alt={val.siteName}/>
              </div>
              <div className="project-desc-container">
                <div className="project-name">
                  <div className="name">{val.siteName}</div>
                </div>
                <div className="project-desc">
                  <div className="desc">Mint your {val.siteName}</div>
                </div>
                <div className="project-preview-button">
                  <button onClick={() => onPreviewSiteBtnClick(val.siteName, val.siteUrl)}>Preview</button>
                </div>
              </div>
            </div>
          ))
        }
      </Container>
      <SitePreviewModal siteName={siteNameToShow} siteUrl={siteUrlToShow} setShow={setShowModal} show={showModal}/>
    </Container>
  );
};

export default MainPortFolio;