// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BasicNavbar from "./components/BasicNavbar";
// import Login from "./screens/Login";
// import Register from "./screens/Register";
// import Home from "./screens/Home";
// import Everything from "./screens/Everything";
// import ShoppingCart from "./screens/ShoppingCart";
// import Product from "./screens/Product";
// import About from "./screens/About";
// import ContactUs from "./screens/ContactUs";
// import Footer from "./components/Footer";
// import PageNotFound from "./screens/PageNotFound";
// import ViewProfile from "./screens/ViewProfile";
// import ScrollToTop from "./components/ScrollToTop";
import Routing from './routes'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [showFooter,setShowFooter]=useState(true);
  
  return (
    <>
      {/* <Router>
        <ScrollToTop />
        <BasicNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login setShowFooter={setShowFooter} />} />
          <Route path="/register" element={<Register setShowFooter={setShowFooter} />} />
          <Route path="/view-profile" element={<ViewProfile setShowFooter={setShowFooter} />} />
          <Route path="/products" element={<Everything />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/men" element={<Everything />} />
          <Route path="/women" element={<Everything />} />
          <Route path="/electronics" element={<Everything />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {showFooter && <Footer />}
      </Router> */}
      <Routing/>
    </>
  );
}

export default App;
