import React, { useState } from "react";
import { IconButton, TableCell, TableRow, TextField } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateCartApi } from "../api/shoppingCart";
import { enqueueSnackbar } from "notistack";

const CartRow = ({ car, removeFromCart }) => {
  const [quantity, setQuantity] = useState(car.quantity);

  const updateCart = async () => {
    const response = await updateCartApi(car.productId, quantity);
    if (response.response) {
      enqueueSnackbar(response.response.data.message, { variant: "error" });
    } else {
      enqueueSnackbar("Successfully the cart item is updated", {
        variant: "success",
      });
    }
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        <img src={car.image} alt={car.name} width={100} />
      </TableCell>
      <TableCell>{car.name}</TableCell>
      <TableCell>{car.price}</TableCell>
      <TableCell>
        {/* <input value={qty} type="number" onChange={(e)=>setQty(e.target.value)} /> */}
        <TextField
          hiddenLabel
          type="number"
          size="small"
          value={quantity}
          InputProps={{ inputProps: { min: 1, max: 10 } }}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </TableCell>
      <TableCell>{quantity * car.price}</TableCell>
      <TableCell>
        <div className="d-flex flex-nowrap justify-content-between">
          <IconButton sx={{ width: "auto" }} onClick={() => updateCart()}>
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
  );
};

export default CartRow;
