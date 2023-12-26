import React, { useState } from "react";
import FiltersSidebar from "../components/FilterSidebar";
import BasicCard from "../components/BasicCard";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Everything = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="filters">
      <button className="show-filters" onClick={()=>setOpen(true)}>Show Filters</button>
      <FiltersSidebar open={open} setOpen={setOpen} fullScreen={fullScreen}/>
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
