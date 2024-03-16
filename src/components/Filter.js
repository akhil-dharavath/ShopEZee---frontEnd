import React from "react";
import { Typography } from "@mui/material";

const Filter = ({ setSearch, categories }) => {
  return (
    <div>
      <div
        className="filter-sidebar vh-100"
        style={{ position: "sticky", top: 60 }}
      >
        <div className="categories my-4">
          <h5
            style={{ cursor: "pointer" }}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            onClick={() => setSearch("")}
          >
            Categories
          </h5>
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
      </div>
    </div>
  );
};

export default Filter;
