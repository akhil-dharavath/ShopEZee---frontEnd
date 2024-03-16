import React, { useEffect } from "react";
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
            categories={categories}
          />
        </Dialog>
      ) : (
        <FilterComponent
          setSearch={setSearchCategory}
          categories={categories}
        />
      )}
    </>
  );
};

export default FiltersSidebar;
