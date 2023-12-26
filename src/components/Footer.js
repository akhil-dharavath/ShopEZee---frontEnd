import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
<<<<<<< HEAD
import { IconButton } from "@mui/material";
=======
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963

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
<<<<<<< HEAD
        <div className="content">
          <p>Copyright © 2023 ShopEZee. Powered by ShopEZee.</p>
          <p>Developed and disgned by Dharavath Akhil.</p>
        </div>
        <div className="icons d-flex justify-content-center">
          <IconButton
            sx={{ "&:hover": { color: "#316FF6", background: "white" } }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#CD201F", background: "white" } }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#1DA1F2", background: "white" } }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#cd486b", background: "white" } }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#3b60c4", background: "white" } }}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            sx={{ "&:hover": { color: "#34A853", background: "white" } }}
          >
            <GoogleIcon />
          </IconButton>
=======
        <p>Copyright © 2023 ShopEZee. Powered by ShopEZee.</p>
        <div className="icons">
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
          <InstagramIcon />
          <EmailIcon />
          <GoogleIcon />
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963
        </div>
      </div>
    </div>
  );
};

export default Footer;
