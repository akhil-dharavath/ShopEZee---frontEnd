import React from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import BasicCard from "../components/BasicCard";

const Everything = () => {
  return (
    <div className="filters">
      <button className="show-filters">Show Filters</button>
      <FiltersSidebar />
      <div className="row cards pt-5 mb-5">
        <BasicCard width={4} />
        <BasicCard width={4} />
        <BasicCard width={4} />
        <BasicCard width={4} />
        <BasicCard width={4} />
        <BasicCard width={4} />
        <BasicCard width={4} />
        <BasicCard width={4} />
      </div>
    </div>
  );
};

export default Everything;
