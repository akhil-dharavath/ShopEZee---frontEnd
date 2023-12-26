import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

const MarginTop = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return <div style={{marginTop:navbarHeight}}></div>;
}

export default MarginTop;