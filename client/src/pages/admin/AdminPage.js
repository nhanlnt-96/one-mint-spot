import React from "react";
import {Container, Row} from "react-bootstrap";
import AdminHeader from "components/adminHeader/AdminHeader";
import Logo from "assets/imgs/bgLogin.svg";

import "./AdminPage.scss";

const AdminPage = () => {
  return (
    <Container fluid className="admin-page-container">
      <AdminHeader/>
      <Container className="admin-page-content d-flex flex-column justify-content-center align-items-center">
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <img src={Logo} alt="logo"/>
          <h1 className="title">Welcome to <span>Project name</span> Admin page</h1>
        </Row>
      </Container>
    </Container>
  );
};

export default AdminPage;