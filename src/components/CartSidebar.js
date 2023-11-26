import * as React from "react";
import PropTypes from "prop-types";
import {
  DialogTitle,
  Dialog,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import image from "../assets/images/login.jpg";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const dialogStyle = {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    maxWidth: "400px",
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      PaperProps={{
        style: dialogStyle,
      }}
    >
      <DialogTitle className="shopping-cart-title">
        <Typography variant="body">Shopping Cart</Typography>
        <IconButton aria-label="close" onClick={() => handleClose()}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {true ? (
        <Box className="d-flex flex-column justify-content-between h-100 align-items-center">
          <div className="cart-item w-100 my-2">
            <div className="d-flex">
              <div
                style={{
                  background: `url(${image}) no-repeat`,
                  width: 80,
                  height: 80,
                  backgroundSize: "cover",
                }}
              />
              <div className="details">
                <p>Black Jeans</p>
                <p>1 x 200</p>
              </div>
            </div>
            <IconButton
              aria-label="close"
              onClick={() => handleListItemClick(12)}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div style={{ width: "90%" }}>
            <Link to="/cart" onClick={() => handleClose()}>
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
          <button className="shopping-cart-btn text-white my-3">
            CONTINUE SHOPPING
          </button>
        </Box>
      )}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
