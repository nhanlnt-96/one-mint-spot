import React, {useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {mainHeaderMenu} from "configs/mainHeaderMenu";
import {connect} from "redux/blockchain/blockchainActions";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "redux/data/dataActions";

import "./MainHeader.scss";

const MainHeader = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [isActive, setIsActive] = useState(false);
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="main-header">
      <Container className="main-header-container">
        <Navbar.Toggle onClick={() => setIsActive(!isActive)} aria-controls="responsive-navbar-nav"
                       className={`main-header-toggle-custom ${isActive && "active"}`}>
          <span className="toggle-line"/>
          <span className="toggle-line"/>
          <span className="toggle-line"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto main-header-menu justify-content-around">
            {
              mainHeaderMenu.map((val, index) => (
                <div key={index} className="header-menu-item">
                  <Nav.Link href={val.path} className="item">{val.label}</Nav.Link>
                </div>
              ))
            }
          </Nav>
          <Nav className="main-header-button">
            <button className="button-item" onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
              getData();
            }}>Connect Wallet
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainHeader;