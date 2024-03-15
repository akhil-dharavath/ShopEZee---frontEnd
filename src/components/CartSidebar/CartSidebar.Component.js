import * as React from "react";
import PropTypes from "prop-types";
import {
  DialogTitle,
  Dialog,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { isEmpty } from "ramda";
import { enqueueSnackbar } from "notistack";

export default function SimpleDialog({
  open,
  onClose,
  cart,
  fetchCart,
  handleRemoveFromCart,
  setValue,
  removeFromCart: removedFromCart,
  removeFromCartFailure,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    localStorage.getItem("token") && fetchCart();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setValue(cart.length);
    // eslint-disable-next-line
  }, [cart]);

  const dialogStyle = {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: fullScreen ? "100%" : "60%",
    maxWidth: !fullScreen && "400px",
  };

  const removeFromCart = async (id) => {
    await handleRemoveFromCart(id);
    await fetchCart();
  };

  useEffect(() => {
    !isEmpty(removedFromCart) &&
      enqueueSnackbar("Successfully item removed from cart", {
        variant: "success",
      });
  }, [removedFromCart]);

  useEffect(() => {
    !isEmpty(removeFromCartFailure) &&
      enqueueSnackbar(removeFromCartFailure.response.data.message, {
        variant: "error",
      });
  }, [removeFromCartFailure]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: dialogStyle,
      }}
      fullScreen={true}
    >
      <DialogTitle className="shopping-cart-title">
        <Typography variant="body">Shopping Cart</Typography>
        <IconButton aria-label="close" onClick={() => onClose()}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {cart && cart.length > 0 ? (
        <Box className="d-flex flex-column h-100 align-items-center">
          {cart.map((car) => (
            <div className="cart-item w-100 my-2" key={car._id}>
              <div className="d-flex mx-3">
                <div
                  style={{
                    background: `url(${car.image}) no-repeat`,
                    width: 80,
                    height: 80,
                    backgroundSize: "cover",
                  }}
                />
                <div className="details">
                  <p>{car.name}</p>
                  <p>
                    {car.quantity} x {car.price / car.quantity}
                  </p>
                </div>
              </div>
              <IconButton
                aria-label="close"
                // onClick={() => handleRemoveFromCart(12)}
                onClick={() => removeFromCart(car.productId)}
              >
                <CloseIcon />
              </IconButton>
            </div>
          ))}
          <div style={{ width: "90%" }}>
            <Link
              to="/cart"
              onClick={() => onClose()}
              className="shopping-cart-link"
              style={{ position: "absolute", bottom: 0, width: "90%" }}
            >
              <button className="shopping-cart-btn text-white my-3 w-100">
                Show Cart
              </button>
            </Link>
          </div>
        </Box>
      ) : (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div></div>
          <p>No products in the cart.</p>
          <Link
            to="/products"
            onClick={() => onClose()}
            className="shopping-cart-link"
            style={{ position: "absolute", bottom: 0, width: "90%" }}
          >
            <button className="shopping-cart-btn text-white my-3 w-100">
              CONTINUE SHOPPING
            </button>
          </Link>
        </Box>
      )}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
