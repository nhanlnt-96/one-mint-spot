import React from "react";
import {Nav} from "react-bootstrap";
import {serviceNavData} from "configs/serviceNavData";

export const ServiceNav = ({setComponentSelected}) => {
  const onChangeTabBtnClick = (eventKey) => {
    setComponentSelected(eventKey);
  };
  return (
    <Nav justify variant="tabs" className="main-service-tabs" defaultActiveKey="creation">
      {
        serviceNavData.map((val, index) => (
          <Nav.Item key={index} onClick={() => onChangeTabBtnClick(val.eventKey)}>
            <Nav.Link eventKey={val.eventKey}>{val.label}</Nav.Link>
          </Nav.Item>
        ))
      }
    </Nav>
  );
};