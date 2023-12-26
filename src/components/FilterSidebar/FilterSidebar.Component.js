import React, { useEffect, useState } from "react";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterComponent from "../../components/Filter";

const FiltersSidebar = ({
  fullScreen,
  open,
  setOpen,
  categories,
  fetchCategories,
  setSearchCategory,
}) => {
  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line
  }, []);

  const [value, setValue] = useState([0, 100]);

  const handleChange = (_, newValue) => {
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
          <IconButton
            onClick={() => setOpen(false)}
            className="filters-close-btn"
          >
            <CloseIcon />
          </IconButton>
          <FilterComponent
            setSearch={setSearchCategory}
            value={value}
            handleChange={handleChange}
            categories={categories}
          />
        </Dialog>
      ) : (
        <FilterComponent
          setSearch={setSearchCategory}
          value={value}
          handleChange={handleChange}
          categories={categories}
        />
      )}
    </>
  );
};

export default FiltersSidebar;
