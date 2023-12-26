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
} from "../routes/ImgRouters";

import Specifications from "../components/Specifications";
import BasicCard from "../components/BasicCard";

const Home = () => {
  const [display, setDisplay] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" ? setDisplay(true) : setDisplay(false);
  }, [location]);

  useEffect(() => {
    display && (document.querySelector(".footer").style.display = "block");
  }, [display]);

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

  return (
    <div style={{ display: display ? "block" : "none" }}>
      <div className="offers">
        <h1>Raining Offers For Hot Summer!</h1>
        <h3>25% Off On All Products</h3>
        <div>
          <Link to="/products" className="z-2">
            <button>Shop Now</button>
          </Link>
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
      <div className="feturedProducts">
        <h1 className="feturedProductsHeading">Featured Products</h1>
        <div className="divider" />
        <div className="row cards mt-5">
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
          <BasicCard />
        </div>
      </div>
      <Specifications />
    </div>
  );
};

export default Home;
