import {Modal} from "react-bootstrap";
import React from "react";

export const ShowAllImgModal = ({
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
        <Modal.Title>All Images</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-all-img-custom">
        {
          data.map((val, index) => (
            <img key={index} src={val} alt="one-mint-spot"/>
          ))
        }
      </Modal.Body>
    </Modal>
  );
};