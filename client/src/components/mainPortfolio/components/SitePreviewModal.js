import {Button, Modal} from "react-bootstrap";

export const SitePreviewModal = ({
                                   show,
                                   setShow,
                                   siteName,
                                   siteUrl
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
        <Modal.Title>{siteName} Site Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <iframe src={siteUrl} frameBorder="0" width="100%" height="100%"/>
      </Modal.Body>
    </Modal>
  );
};