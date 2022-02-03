import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import EditorComp from "components/editor/EditorComp";
import UploadImg from "components/uploadImg/UploadImg";
import Homepage from "pages/homepage/Homepage";
import EditorTitle from "components/editorTitle/EditorTitle";

const BannerEditor = () => {
  return (
    <Container fluid className="editor-container">
      <Row className="editor-top-container">
        <Col className="editor-item">
          <EditorTitle title={"Banner's Title"}/>
          <EditorComp/>
        </Col>
        <Col className="editor-item">
          <EditorTitle title={"Banner's Subtitle"}/>
          <EditorComp/>
        </Col>
        <Col className="editor-item">
          <EditorTitle title={"Image Upload"}/>
          <UploadImg/>
        </Col>
      </Row>
      <Row>
        <EditorTitle title={"Preview"}/>
        <Homepage/>
      </Row>
    </Container>
  );
};

export default BannerEditor;