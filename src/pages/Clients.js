import React, { useRef } from 'react';
// import './LogoScroll.css'; // Create your own CSS file for styling

const LogoScroll = ({ logos }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust scroll distance
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust scroll distance
    }
  };

  return (
    <div className="logo-container">
      <div className="logos" ref={scrollRef}>
        {logos.map((logo, index) => (
          <div className="logo" key={index}>
            <img src={logo.url} alt={`Client ${index + 1} Logo`} />
          </div>
        ))}
      </div>
      <button className="scroll-btn prev-btn" onClick={scrollLeft}>
        &lt;
      </button>
      <button className="scroll-btn next-btn" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default LogoScroll;
