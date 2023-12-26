import React, { lazy } from "react";
const HomePage = lazy(() => import("../screens/HomePage"));
const Products = lazy(() => import("../screens/Products"));
const ShoppingCart = lazy(() => import("../screens/ShoppingCart"));
const MarginTop = lazy(() => import("../components/MarginTop"));
const BasicNavbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const Product = lazy(() => import("../screens/Product"));
const AboutUs = lazy(() => import("../screens/About"));
const ContactUs = lazy(() => import("../screens/ContactUs"));
const ViewProfile = lazy(() => import("../screens/ViewProfile"));
const Orders = lazy(() => import("../screens/Orders"));
const ErrorPage = lazy(() => import("../screens/PageNotFound"));

const MainRoutes = {
  path: "/",
  element: [
    <MarginTop key="margint top" />,
    <BasicNavbar key="navbar" />,
    <HomePage key="home" />,
    <Footer key="footer" />,
  ],
  children: [
    {
      path: "products",
      element: <Products key="products" />,
    },
    {
      path: "women",
      element: <Products key="women" />,
    },
    {
      path: "men",
      element: <Products key="men" />,
    },
    {
      path: "electronics",
      element: <Products key="electronics" />,
    },
    {
      path: "products/:id",
      element: <Product key="product id" />,
    },
    {
      path: "orders",
      element: <Orders key="orders" />,
    },
    {
      path: "user-orders",
      element: <Orders key="user orders" admin='true' />,
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
      path: "your-account",
      element: <ViewProfile key="your account" />,
    },
    {
      path: "cart",
      element: <ShoppingCart key="shopping cart" />,
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
