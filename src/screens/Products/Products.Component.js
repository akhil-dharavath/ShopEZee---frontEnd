import React, { useEffect, useState } from "react";
import FiltersSidebar from "../../components/FilterSidebar";
import BasicCard from "../../components/BasicCard";
import Spinner from "../../components/Spinner";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";

const Everything = ({
  fetchProducts,
  productsLoading,
  products,
  searchCategory,
}) => {
  const [open, setOpen] = useState(false);
  const [filterIt, setFilterIt] = useState("");
  const location = useLocation();
  useEffect(() => {
    fetchProducts();
    setFilterIt(location.pathname.slice(1));
    // eslint-disable-next-line
  }, [location]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [searchCategory]);
  if (productsLoading) {
    return <Spinner />;
  }
  return (
    <div className="filters">
      <button className="show-filters" onClick={() => setOpen(true)}>
        Show Filters
      </button>
      <FiltersSidebar open={open} setOpen={setOpen} fullScreen={fullScreen} />
      <div className="row one my-5 w-100" style={{ minHeight: "85vh" }}>
        {products
          .filter((prod) =>
            filterIt !== "products"
              ? prod.category.toLowerCase() === filterIt
              : searchCategory === ""
              ? prod
              : prod.category.toLowerCase() === searchCategory.toLowerCase()
          )
          .map((prod) => (
            <BasicCard key={prod._id} product={prod} width={4} />
          ))}
      </div>
    </div>
  );
};

export default Everything;
