import React, { lazy } from "react";
import MinimalLayout from '../app/Layout/MinimalLayout'

const RegisterPage = lazy(() => import('../app/Main/Authentication/Register'))
const LoginComponent = lazy(() => import('../app/Main/Authentication/Login'))


const LoginRoutes = {
    path: '/auth',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <LoginComponent />,
        },
        {
            path: 'register',
            element: <RegisterPage />,
        },
    ],
};

export default LoginRoutes;