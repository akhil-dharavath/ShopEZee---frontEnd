import React from "react";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  // Autocomplete, IconButton, TextField,
  Typography,
} from "@mui/material";

const Filter = ({
  search,
  setSearch,
  handleSubmit,
  value,
  handleChange,
  categories,
}) => {
  return (
    <div>
      <div className="filter-sidebar vh-100" style={{position:'sticky',top:60}}>
        {/* <form onSubmit={handleSubmit}>
          <Autocomplete
            value={search}
            onChange={(_, newValue) => {
              setSearch(newValue);
            }}
            options={categories.map((cat) => cat.name)}
            fullWidth
            renderInput={(params) => <TextField {...params} />}
          />
          <IconButton type="submit">
            <ChevronRightIcon />
          </IconButton>
        </form> */}
        <div className="categories my-4">
          <h5>Categories</h5>
          <div>
            {categories.map((cat) => (
              <div key={cat.name} className="mt-2">
                <Typography
                  onClick={() => setSearch(cat.name)}
                  className="bg-white text-dark"
                  sx={{
                    "&:hover": {
                      color: "#476eb5 !important",
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  {cat.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        
        {/* these two comments should be added after the h4 below comment*/}
        {/* <Slider
            min={0}
            max={100}
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
          /> */}
        {/* <div className="slider-wrapper">
            <button className="">FILTER</button>
            <p className="">Price: $0 - $100</p>
          </div> */}

        {/* <div className="d-flex flex-column flex-nowrap">
          <h4 className="mt-2">Filter</h4>
          <button className="mt-2">Price: Low to High</button>
          <button className="mt-2">Price: High to Low</button>
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
