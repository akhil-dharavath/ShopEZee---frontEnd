import React from "react";
import FeaturedProducts from "../pages/FeaturedProducts";
import Offers from "../pages/Offers";
import Clients from "../pages/Clients";
import Boat from "../assets/images/boat_logo.png";
import Buffalo from "../assets/images/buffalo_logo.png";
import CalvinKlein from "../assets/images/Calvin_Klein_logo.png";
import FlyingMachine from "../assets/images/flying_machine_logo.png";
import Iphone from "../assets/images/iPhone_Logo.png";
import Levis from "../assets/images/levis_logo.webp";
import OnePlus from "../assets/images/OnePlus_logo.png";
import Samsung from "../assets/images/samsung_logo.png";
import LimitedTimeOffer from "../pages/LimitedTimeOffer";
import Specifications from "../pages/Specifications";

const Home = () => {
  const logos = [
    { url: Boat },
    { url: Buffalo },
    { url: CalvinKlein },
    { url: FlyingMachine },
    { url: Iphone },
    { url: Levis },
    { url: OnePlus },
    { url: Samsung },
  ];

  return (
    <div>
      <Offers />
      <Clients logos={logos} />
      <FeaturedProducts />
      <LimitedTimeOffer />
      <Specifications />
    </div>
  );
};

export default Home;
