import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
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
=======
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import {log_in} from '../routes/ImgRouters'

export default function BasicCard({ width }) {
  return (
    <Card className={`card col-lg-${width} col-md-${width===3?4:6} col-sm-${width===3?6:12}  col-12 product-card`}>
      <Link to='/products/12'><CardMedia component="img" height="150" image={log_in} alt="product" /></Link>
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
>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963
  );
}

BasicCard.defaultProps = {
  width: 3,
};
<<<<<<< HEAD
=======

>>>>>>> edefb436ec8c51250c51865c42d2ea1d52133963
