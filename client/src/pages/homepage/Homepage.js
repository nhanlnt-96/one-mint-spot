import React from "react";
import {Container} from "react-bootstrap";
import MintBoxComp from "../../components/mintBox/MintBoxComp";
import {Link} from "react-router-dom";

const Homepage = () => {
  return (
    <Container fluid className="bg-dark">
      <Container className="d-flex flex-column justify-content-center align-items-center" style={{minHeight: "100vh"}}>
        <h1 className="h1" style={{color: "#fff"}}>Welcome to Mint App template</h1>
        <div style={{width: "60%"}}>
          <MintBoxComp/>
        </div>
        <div style={{marginTop: 24}}>
          <Link to="/admin">Admin Page</Link>
        </div>
      </Container>
    </Container>
  );
};

export default Homepage;