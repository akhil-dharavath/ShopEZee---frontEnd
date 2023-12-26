import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

const ShoppingCart = ({ cart, fetchCart, handleRemoveFromCart }) => {
  const [qty, setQty] = useState(0);

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  const handleQty = (e) => {
    e.preventDefault();
    setQty(e.target.value);
  };

  const removeFromCart = async (id) => {
    await handleRemoveFromCart(id);
    await fetchCart();
  };

  console.log(cart);

  return (
    <div className="shopping-cart">
      <h1>Cart</h1>
      {cart && cart.length > 0 ? (
        <TableContainer component={Paper} sx={{ minHeight: "60vh" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width="20%"></TableCell>
                <TableCell width="20%">Product</TableCell>
                <TableCell width="15%">Price</TableCell>
                <TableCell width="15%">Quantity</TableCell>
                <TableCell width="15%">Subtotal</TableCell>
                <TableCell width="15%"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((car) => (
                <TableRow
                  key={car.productId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <img src={car.image} alt="login" width={100} />
                  </TableCell>
                  <TableCell>{car.name}</TableCell>
                  <TableCell>{car.price}</TableCell>
                  <TableCell>
                    {/* <input value={qty} type="number" onChange={(e)=>setQty(e.target.value)} /> */}
                    <TextField
                      hiddenLabel
                      type="number"
                      size="small"
                      value={qty !== 0 ? qty : car.quantity}
                      InputProps={{ inputProps: { min: 1, max: 10 } }}
                      onChange={(e) => handleQty(e)}
                    />
                  </TableCell>
                  <TableCell>{car.quantity * car.price}</TableCell>
                  <TableCell>
                    <div className="d-flex flex-nowrap justify-content-between">
                      <IconButton sx={{ width: "auto" }}>
                        <DoneIcon />
                      </IconButton>
                      <IconButton
                        sx={{ width: "auto" }}
                        onClick={() => removeFromCart(car.productId)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h4
          style={{
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Your cart is Empty
        </h4>
      )}
    </div>
  );
};

export default ShoppingCart;
