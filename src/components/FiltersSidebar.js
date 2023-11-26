import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton, Slider } from "@mui/material";

const FiltersSidebar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className="filter-sidebar vh-100">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton type="submit">
          <ChevronRightIcon />
        </IconButton>
      </form>
      <div className="categories my-4">
        <h5>categories</h5>
        <p>catergory1</p>
        <p>catergory2</p>
        <p>catergory3</p>
        <p>catergory4</p>
        <p>catergory5</p>
        <p>catergory6</p>
      </div>
      <div>
        <h4>Filter by Price</h4>
        <Slider
          min={0}
          max={100}
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
        />
        <div className="d-flex justify-content-between">
          <button className="px-4 py-2">FILTER</button>
          <p className="m-auto">Price: $0 - $100</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default FiltersSidebar;
