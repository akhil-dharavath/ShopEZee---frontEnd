import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const PageNotFound = () => {
  const location = useLocation();
  useEffect(() => {
    document.querySelector('.footer').style.display = 'none';
  }, [location]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop:"20%"
      }}
    >
      <h1>Page Not Found</h1>
      <Link to='/' role="button" className="btn btn-primary mt-5">Go to HomePage</Link>
    </div>
  );
};

export default PageNotFound;
