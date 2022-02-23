import React, {useState} from "react";
import {Container} from "react-bootstrap";
import MainTitle from "components/mainTitle/MainTitle";
import {portfolioData} from "configs/portfolioData";
import {SitePreviewModal} from "components/mainPortfolio/components";
import LoadMore from "assets/icons/loadMore.png";

import "./MainPortfolio.scss";
import {AllProjectModal} from "components/mainPortfolio/components/AllProjectModal";

const MainPortFolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
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
            <>
              {
                (index + 1) <= 6 && (
                  <div key={index} onClick={() => onPreviewSiteBtnClick(val.siteName, val.siteUrl)}
                       data-aos="zoom-in"
                       className="project-item">
                    <div className="project-img-preview">
                      <img src={val.preview} alt={val.siteName}/>
                    </div>
                    <div className="project-desc-container">
                      <div className="project-name">
                        <div className="name">{val.siteName}</div>
                      </div>
                      <div className="project-desc">
                        <div className="desc">{val.description}</div>
                      </div>
                    </div>
                  </div>
                )
              }
            </>
          ))
        }
      </Container>
      <div className="load-more-btn d-flex justify-content-center align-items-center">
        <button className="d-flex justify-content-center align-items-center" onClick={() => setShowAllProjects(true)}>
          Load more
          <img src={LoadMore} alt=""/>
        </button>
      </div>
      <AllProjectModal show={showAllProjects}
                       setShow={setShowAllProjects}
                       data={portfolioData}
                       onPreviewSiteBtnClick={onPreviewSiteBtnClick}/>
      <SitePreviewModal siteName={siteNameToShow} siteUrl={siteUrlToShow} setShow={setShowModal} show={showModal}/>
    </Container>
  );
};

export default MainPortFolio;