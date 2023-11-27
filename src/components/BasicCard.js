import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import Login from "../assets/images/login.jpg";
import { Link } from "react-router-dom";

export default function BasicCard({ width }) {
  return (
    <Card className={`card col-lg-${width} col-md-${width===3?4:6} col-sm-${width===3?6:12}  col-12 product-card`}>
      <Link to='/products/12'><CardMedia component="img" height="150" image={Login} alt="product" /></Link>
      <CardContent>
        <Typography variant="h6"><Link to='/products/12' className="m-0 p-0 text-dark">Title</Link></Typography>
        <Typography variant="body2" color="text.secondary">
          Category
        </Typography>
        <Typography variant="h6">prize</Typography>
        <Typography>
          <Rating name="half-rating" defaultValue={0} precision={0.5} readOnly />
        </Typography>
      </CardContent>
    </Card>
  );
}

BasicCard.defaultProps = {
  width: 3,
};

