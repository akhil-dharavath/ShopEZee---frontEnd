// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Rating,
//   TextField,
//   Typography,
//   Button,
// } from "@mui/material";
// import { log_in } from "../routes/ImgRouters";

// const Product = () => {
//   const [rate, setRate] = useState(false);
//   const [rating, setRating] = useState(0);
//   const location = useLocation();
//   // const idFromPathname = location.pathname.split("/").pop();
//   // const customPropValue = location.state && location.state.customProp;
//   console.log(location);
//   useEffect(() => {});
//   return (
//     <div className="product">
//       <img src={log_in} alt="product" />
//       <div>
//         <h2>Title</h2>
//         <h4>Description</h4>
//         <h4>Price</h4>
//         <Typography className="d-flex justify-content-between">
//           <Rating
//             defaultValue={0}
//             value={rating}
//             onClick={() => setRate(true)}
//             onChange={(e) => setRating(e.target.value)}
//           />
//         </Typography>
//         <Link to="/products" className="product-close-btn">
//           X
//         </Link>
//         <div>
//           <button className="add-to-cart">Add to Cart</button>
//           <button className="buy-now">Buy Now</button>
//         </div>
//       </div>
//       <Dialog open={rate} fullWidth maxWidth="sm">
//         <DialogTitle>Rate the Product</DialogTitle>
//         <DialogContent>
//           <Rating value={rating} onChange={(e) => setRating(e.target.value)} />
//           <div className="mb-3">
//             <label htmlFor="category" className="form-label m-0">
//               Review
//             </label>
//             <br />
//             <TextField
//               fullWidth
//               hiddenLabel
//               size="small"
//               name="category"
//               id="category"
//             />
//           </div>
//         </DialogContent>
//         <DialogActions className="mx-3 mb-3">
//           <Button
//             variant="contained"
//             color="error"
//             onClick={() => setRate(false)}
//           >
//             Close
//           </Button>
//           <Button variant="contained" color="success">
//             Post
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Product;
