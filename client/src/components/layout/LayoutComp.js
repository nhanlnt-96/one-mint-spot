import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {routes} from "../../configs/routes";
import {useSelector} from "react-redux";

const LayoutComp = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const accessToken = localStorage.getItem("accessToken");
  const renderComponent = (isLogged, module, isPrivate) => {
    if (isPrivate) {
      return (isLogged || accessToken) ? module : <Navigate to="/login"/>;
    }
    return module;
  };
  return (
    <Routes>
      {
        routes.map((val, index) => (
          <Route key={index} path={val.path} element={renderComponent(isLogged, val.module, val.isPrivate)}/>
        ))
      }
    </Routes>
  );
};

export default LayoutComp;