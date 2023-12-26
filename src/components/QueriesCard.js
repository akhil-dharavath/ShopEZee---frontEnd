import React from "react";
import { Card } from "react-bootstrap";

const QueriesCard = ({ title, description, contact }) => {
  return (
    <Card className="queries-card">
      <h3>{title}</h3>
      <p className="text-secondary">{description}</p>
      <h5>{contact}</h5>
    </Card>
  );
};

export default QueriesCard;
