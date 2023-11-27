import React, { lazy } from "react";
const MarginTop = lazy(() => import("../components/MarginTop"));
const BasicNavbar = lazy(() => import("../components/BasicNavbar"));
const Footer = lazy(() => import("../components/Footer"));
const Home = lazy(() => import("../screens/Home"));
const Everything = lazy(() => import("../screens/Everything"));
const Product = lazy(() => import("../components/Product"));
const AboutUs = lazy(() => import("../screens/About"));
const ContactUs = lazy(() => import("../screens/ContactUs"));
const ViewProfile = lazy(() => import("../screens/ViewProfile"));
const Orders = lazy(() => import("../components/Orders"));
const ErrorPage = lazy(() => import("../screens/PageNotFound"));

const MainRoutes = {
  path: "/",
  element: [
    <MarginTop key="margint top" />,
    <BasicNavbar key="navbar" />,
    <Home key="home" />,
    <Footer key="footer" />,
  ],
  children: [
    {
      path: "products",
      element: <Everything key="products" />,
    },
    {
      path: "orders",
      element: <Orders key="orders" />,
    },
    {
      path: "user-orders",
      element: <Orders key="user orders" admin />,
    },
    {
      path: "women",
      element: <Everything key="women" />,
    },
    {
      path: "men",
      element: <Everything key="men" />,
    },
    {
      path: "electronics",
      element: <Everything key="electronics" />,
    },
    {
      path: "products/:id",
      element: <Product key="product id" />,
    },
    {
      path: "about",
      element: <AboutUs key="about" />,
    },
    {
      path: "contact-us",
      element: <ContactUs key="contact us" />,
    },
    {
      path: "view-profile",
      element: <ViewProfile key="view profile" />,
    },
    {
      path: "*",
      element: <ErrorPage key="error Page" />,
    },
  ],
};

export default MainRoutes;
