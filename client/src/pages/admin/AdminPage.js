import React from "react";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const AdminPage = () => {
  return (
    <Container fluid className="bg-dark d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>
      <h1 className="h1" style={{color: "#fff"}}>This is admin page</h1>
      <Link to="/">Home</Link>
    </Container>
  );
};

export default AdminPage;