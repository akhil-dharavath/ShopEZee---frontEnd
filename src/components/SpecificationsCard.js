import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const SpecificationsCard = ({ Icon, title, description }) => {
  return (
    <Card className="specificationsCard text-center col-md-3 col-sm-6 col-12 my-2">
      <Icon className="icon" />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default SpecificationsCard;
