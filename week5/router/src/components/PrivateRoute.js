import React from "react";
import { Navigate } from "react-router-dom";

const isLogin = () => !!localStorage.getItem("id");

const PrivateRoute = ({ Component }) => {
  return isLogin() ? (
    Component
  ) : (
    <Navigate
      to="/user/login"
      {...alert("접근할 수 없는 페이지입니다.")}
    ></Navigate>
  );
};

export default PrivateRoute;
