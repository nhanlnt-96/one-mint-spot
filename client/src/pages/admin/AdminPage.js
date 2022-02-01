import React from "react";
import {Container} from "react-bootstrap";
import AdminHeader from "components/adminHeader/AdminHeader";

import "./AdminPage.scss";

const AdminPage = () => {
  return (
    <Container fluid className="admin-page-container">
      <AdminHeader/>
    </Container>
  );
};

export default AdminPage;