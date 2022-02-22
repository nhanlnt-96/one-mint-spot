import {Modal} from "react-bootstrap";
import {portfolioData} from "configs/portfolioData";
import React from "react";

export const AllProjectModal = ({
                                  show,
                                  setShow,
                                  data,
                                  onPreviewSiteBtnClick
                                }) => {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      backdrop="static"
      keyboard={false}
      centered
      fullscreen={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>All Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-all-project-custom">
        {
          data.map((val, index) => (
            <div onClick={() => onPreviewSiteBtnClick(val.siteName, val.siteUrl)}
                 data-aos="zoom-in"
                 key={index}
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
          ))
        }
      </Modal.Body>
    </Modal>
  );
};