import React, { lazy } from "react";
// import Home from "../screens/Home";
import { Outlet } from "react-router-dom";
// import MinimalLayout from '../app/Layout/MinimalLayout'

<<<<<<< HEAD
const RegisterPage = lazy(() => import("../screens/Register/index"));
const LoginComponent = lazy(() => import("../screens/Login/index"));
=======
const RegisterPage = lazy(() => import("../screens/Register"));
const LoginComponent = lazy(() => import("../screens/Login"));
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963

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
