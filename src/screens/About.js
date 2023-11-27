import React from "react";
import OurTeamProfile from "../components/OurTeamProfile";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Specifications from "../components/Specifications";
import {
  about_1,
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
  profile6,
} from "../routes/ImgRouters";

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
        <img src={about_1} alt="people dicussing" />
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
        <OurTeamProfile image={profile1} name="Harvey" role="Founder - CEO" />
        <OurTeamProfile image={profile2} name="Jessica" role="COO" />
        <OurTeamProfile image={profile3} name="Rachel" role="Marketing Head" />
        <OurTeamProfile image={profile5} name="Luise" role="Lead Developer" />
        <OurTeamProfile
          image={profile4}
          name="Katrina"
          role="Intern Designer"
        />
        <OurTeamProfile image={profile6} name="Mike" role="Intern Designer" />
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
      <Specifications />
    </div>
  );
};

export default About;
