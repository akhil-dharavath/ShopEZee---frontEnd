import React, { useEffect, useState } from "react";

const PageNotFound = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: navbarHeight,
      }}
    >
      <h1>Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
