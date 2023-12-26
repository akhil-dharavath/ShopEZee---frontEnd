import React, { lazy } from "react";
// import Home from "../screens/Home";
import { Outlet } from "react-router-dom";
// import MinimalLayout from '../app/Layout/MinimalLayout'

const RegisterPage = lazy(() => import("../screens/Register/index"));
const LoginComponent = lazy(() => import("../screens/Login/index"));

const LoginRoutes = {
  path: "/auth",
  element: <Outlet />,
  children: [
    {
      path: "login",
      element: <LoginComponent />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ],
};

export default LoginRoutes;
