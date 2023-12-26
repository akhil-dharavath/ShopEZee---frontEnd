import React from "react";
import { Card } from "react-bootstrap";

const OurTeamProfile = ({ image, name, role }) => {
  return (
    <Card className="col-md-3 col-sm-4 col-12 profile-card">
      <div className="image-container my-2">
        <img src={image} alt={image} />
      </div>
      <h4 className="text-center mt-2">{name}</h4>
      <p className="text-center">{role}</p>
    </Card>
  );
};

export default OurTeamProfile;
