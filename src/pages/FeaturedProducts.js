import React from "react";
import BasicCard from "../components/BasicCard";

const FeaturedProducts = () => {
  return (
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
  );
};

export default FeaturedProducts;
