import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-footer">
        <div className="left">
          <h3>ShopEZee</h3>
          <h5>The best look anytime, anywhere.</h5>
        </div>
        <div className="right">
          <div className="card">
            <h3>For Her</h3>
            <p>Women Jeans</p>
            <p>Tops and Shirts</p>
            <p>Women Jackets</p>
            <p>Heels and Flats</p>
            <p>Women Accessories</p>
          </div>
          <div className="card">
            <h3>For Him</h3>
            <p>Men Jeans</p>
            <p>Men Shirts</p>
            <p>Men Shoes</p>
            <p>Men Accessories</p>
            <p>Men Jackets</p>
          </div>
          <div className="card">
            <h3>Electronics</h3>
            <p>Smart Phones</p>
            <p>Laptops</p>
            <p>Ear buds</p>
            <p>Speakers</p>
            <p>Smart Watches</p>
          </div>
        </div>
      </div>
      <div className="second-footer">
        <p>Copyright © 2023 ShopEZee. Powered by ShopEZee.</p>
        <div className="icons">
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
          <InstagramIcon />
          <EmailIcon />
          <GoogleIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
