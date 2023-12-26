import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Dialog, IconButton, Slider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FiltersSidebar = ({ fullScreen, open, setOpen }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dialogStyle = {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: fullScreen ? "100%" : "60%",
    maxWidth: !fullScreen && "400px",
  };

  const Filter = () => {
    return (
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
          <div className="slider-wrapper">
            <button className="">FILTER</button>
            <p className="">Price: $0 - $100</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {fullScreen ? (
        <Dialog
          open={open}
          PaperProps={{
            style: dialogStyle,
          }}
          fullScreen={true}
        >
          {fullScreen}
          <IconButton onClick={() => setOpen(false)} className="filters-close-btn">
            <CloseIcon />
          </IconButton>
          <Filter />
        </Dialog>
      ) : (
        <Filter />
      )}
    </>
  );
};

export default FiltersSidebar;
