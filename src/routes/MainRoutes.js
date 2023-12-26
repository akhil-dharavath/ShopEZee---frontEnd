import React, { lazy } from "react";
<<<<<<< HEAD
// import HomePage from "../screens/HomePage/index";
// import Products from "../screens/Products/index";
// import Product from "../screens/Product";
const MarginTop = lazy(() => import("../components/MarginTop"));
const BasicNavbar = lazy(() => import("../components/Navbar"));
const HomePage = lazy(() => import("../screens/HomePage"));
const Products = lazy(() => import("../screens/Products"));
const Footer = lazy(() => import("../components/Footer"));
const Product = lazy(() => import("../screens/Product"));
const AboutUs = lazy(() => import("../screens/About"));
const ContactUs = lazy(() => import("../screens/ContactUs"));
const ViewProfile = lazy(() => import("../screens/ViewProfile"));
const Orders = lazy(() => import("../screens/Orders"));
const ErrorPage = lazy(() => import("../screens/PageNotFound"));
const ShoppingCart = lazy(() => import("../screens/ShoppingCart"));
=======
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
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963

const MainRoutes = {
  path: "/",
  element: [
    <MarginTop key="margint top" />,
    <BasicNavbar key="navbar" />,
<<<<<<< HEAD
    <HomePage key="home" />,
=======
    <Home key="home" />,
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963
    <Footer key="footer" />,
  ],
  children: [
    {
      path: "products",
<<<<<<< HEAD
      element: <Products key="products" />,
    },
    {
      path: "products/:id",
      element: <Product key="product id" />,
=======
      element: <Everything key="products" />,
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963
    },
    {
      path: "orders",
      element: <Orders key="orders" />,
    },
    {
      path: "user-orders",
<<<<<<< HEAD
      element: <Orders key="user orders" admin='true' />,
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
=======
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
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963
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
<<<<<<< HEAD
      path: "your-account",
      element: <ViewProfile key="your account" />,
    },
    {
      path: "cart",
      element: <ShoppingCart key="shopping cart" />,
=======
      path: "view-profile",
      element: <ViewProfile key="view profile" />,
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963
    },
    {
      path: "*",
      element: <ErrorPage key="error Page" />,
    },
  ],
};

export default MainRoutes;
