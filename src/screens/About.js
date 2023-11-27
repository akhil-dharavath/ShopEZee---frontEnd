import React from "react";
import OurTeamProfile from "../components/OurTeamProfile";
import About1 from "../assets/images/about1.jpeg";
import Profile1 from "../assets/images/profile1.jpeg";
import Profile2 from "../assets/images/profile2.jpeg";
import Profile3 from "../assets/images/profile3.jpeg";
import Profile4 from "../assets/images/profile4.jpeg";
import Profile5 from "../assets/images/profile5.jpeg";
import Profile6 from "../assets/images/profile6.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Specifications from "../components/Specifications";

const About = () => {
  return (
    <div className="About">
      <div className="heading right-nav" />
      <div className="who-we-are">
        <div className="left">
          <div className="separetor" />
          <h1>Who We Are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec
            tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
            erat consequat auctor eu in elit.
          </p>
        </div>
        <img src={About1} alt="people dicussing" />
      </div>
      <div className="our-team text-center">
        <div className="separetor" />
        <h3>A Few Words About</h3>
        <h1>Our Team</h1>
        <p>
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra.
        </p>
      </div>
      <div className="profiles row">
        <OurTeamProfile image={Profile1} name="Harvey" role="Founder - CEO" />
        <OurTeamProfile image={Profile2} name="Jessica" role="COO" />
        <OurTeamProfile image={Profile3} name="Rachel" role="Marketing Head" />
        <OurTeamProfile image={Profile5} name="Luise" role="Lead Developer" />
        <OurTeamProfile image={Profile4} name="Katrina" role="Intern Designer" />
        <OurTeamProfile image={Profile6} name="Mike" role="Intern Designer" />
      </div>
      <div className="contact-us text-center">
        <div className="inside">
          <div className="separetor" />
          <h1>Contact Us</h1>
          <div className="w-100 d-flex justify-content-evenly">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <EmailIcon />
          </div>
        </div>
      </div>
      <Specifications/>
    </div>
  );
};

export default About;
