import * as React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ image, title, description, link, onClick }) => {
  return (
    <Link to={link} onClick={onClick} className="account-card">
      <div>
        <img src={image} alt={title} style={{ width: 70 }} />
      </div>
      <div className="content">
        <h5 className="text-dark">{title}</h5>
        <p className="text-secondary">{description}</p>
      </div>
    </Link>
  );
};

export default ProfileCard;
