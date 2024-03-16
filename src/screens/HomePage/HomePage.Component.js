import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  boat_logo,
  buffalo_logo,
  calvin_Klein_logo,
  flying_machine_logo,
  iphone_logo,
  levis_logo,
  one_plus_logo,
  samsung_logo,
} from "../../routes/ImgRouters";

import Specifications from "../../components/Specifications";
import BasicCard from "../../components/BasicCard";
import Spinner from "../../components/Spinner";

const Home = ({ productsLoading, products, fetchProducts, handleGetUser }) => {
  const [display, setDisplay] = useState(false);
  //   const [products, setProducts] = useState(products1);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" ? setDisplay(true) : setDisplay(false);
  }, [location]);

  useEffect(() => {
    display && (document.querySelector(".footer").style.display = "block");
  }, [display]);

  useEffect(() => {
    fetchProducts();
    localStorage.getItem('token') && handleGetUser();
    window.location.reload();
    // eslint-disable-next-line
  }, []);

  let featured = [];

  // Generate 8 unique random numbers
  while (featured.length < 8) {
    let randomNum = Math.floor(Math.random() * 11); // Generates numbers from 0 to 11
    if (!featured.includes(randomNum)) {
      featured.push(randomNum);
    }
  }

  const logos = [
    { url: boat_logo },
    { url: buffalo_logo },
    { url: calvin_Klein_logo },
    { url: flying_machine_logo },
    { url: iphone_logo },
    { url: levis_logo },
    { url: one_plus_logo },
    { url: samsung_logo },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" }); // Adjust scroll distance
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" }); // Adjust scroll distance
    }
  };

  return productsLoading ? (
    <Spinner />
  ) : (
    <div style={{ display: display ? "block" : "none" }}>
      <div className="offers">
        <h1>Raining Offers For Hot Summer!</h1>
        <h3>25% Off On All Products</h3>
        <div>
          <a href="#feturedProducts" className="z-2">
            <button>Shop Now</button>
          </a>
          <Link to="/products" className="z-2">
            <button>Find More</button>
          </Link>
        </div>
      </div>
      <div className="logo-container">
        <div className="logos" ref={scrollRef}>
          {logos.map((logo, index) => (
            <div className="logo" key={index}>
              <img src={logo.url} alt={`Client ${index + 1} Logo`} />
            </div>
          ))}
        </div>
        <button className="scroll-btn prev-btn" onClick={scrollLeft}>
          &lt;
        </button>
        <button className="scroll-btn next-btn" onClick={scrollRight}>
          &gt;
        </button>
      </div>
      <div className="feturedProducts" id="feturedProducts">
        <h1 className="feturedProductsHeading">Featured Products</h1>
        <div className="divider" />
        <div className="row cards mt-5">
          {featured.length > 0 &&
            featured.map((prod) => (
              <BasicCard key={prod} product={products[prod]} />
            ))}
        </div>
      </div>
      <Specifications />
    </div>
  );
};

export default Home;
