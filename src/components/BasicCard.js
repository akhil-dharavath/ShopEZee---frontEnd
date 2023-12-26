import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function BasicCard({ product, width }) {
  return (
    product && (
      <Card
        className={`col-12 col-xl-3 col-lg-${width === 4 ? 4 : 3} col-md-${
          width === 4 ? 6 : 4
        } col-sm-${width === 4 ? 12 : 6} col-xs-12 two`}
      >
        <Link
          to={{
            pathname: `/products/${product._id}`,
            state: { name: "akhil" },
          }}
          sx={{ background: "white" }}
        >
          <CardMedia
            component="img"
            sx={{ background: "white", display: "block" }}
            image={product.image}
            alt={product.name}
          />
        </Link>
        <CardContent>
          <Typography variant="h6">
            <Link
              to={{ pathname: `/products/${product._id}`, state: { product } }}
              className="m-0 p-0 text-dark"
            >
              {product.name}
            </Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
          <Typography variant="h6">&#8377; {product.price}</Typography>
          <Typography></Typography>
        </CardContent>
      </Card>
    )
  )
}

BasicCard.defaultProps = {
  width: 3,
};

