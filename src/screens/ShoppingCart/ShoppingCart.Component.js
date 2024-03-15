import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CartRow from "../../components/CartRow";
import { isEmpty } from "ramda";
import { enqueueSnackbar } from "notistack";

const ShoppingCart = ({
  cart,
  fetchCart,
  handleRemoveFromCart,
  removeFromCart: removedFromCart,
  removeFromCartFailure,
}) => {
  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  const removeFromCart = async (id) => {
    await handleRemoveFromCart(id);
    await fetchCart();
  };

  useEffect(() => {
    !isEmpty(removeFromCartFailure) &&
      enqueueSnackbar(removeFromCartFailure.response.data.message, {
        variant: "error",
      });
  }, [removeFromCartFailure]);

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
                <CartRow
                  key={car._id}
                  car={car}
                  removeFromCart={removeFromCart}
                />
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
