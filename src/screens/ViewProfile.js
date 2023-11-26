import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import orders from "../assets/images/orders.avif";
import security from "../assets/images/security.png";
import contact from "../assets/images/contact.png";
import product from "../assets/images/product.png";
import userOrders from "../assets/images/user-orders.png";
import categories from "../assets/images/categories.png";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Button } from "@mui/material";

const ViewProfile = ({ setShowFooter }) => {
  useEffect(() => {
    setShowFooter(false);
  }, [setShowFooter]);

  const [openSecurity, setOpenSecurity] = useState(false);

  const handleClose = () => {
    setOpenSecurity(false);
  };

  return (
    <div>
      <h1 className="p-5">Your Account</h1>
      <div className="account-cards">
        <ProfileCard
          image={orders}
          title="Your Orders"
          description="Track, return, or buy things again"
          link="/cart"
        />
        <ProfileCard
          image={security}
          title="Login & security"
          description="Edit your name, password"
          onClick={() => setOpenSecurity(true)}
        />
        <ProfileCard
          image={contact}
          title="Contact Us"
          description=""
          link="/contact-us"
        />
        <ProfileCard
          image={product}
          title="Add Products"
          description="Add any new products"
          link="/cart"
        />
        <ProfileCard
          image={userOrders}
          title="User Orders"
          description="Track and update user products"
          link="/cart"
        />
        <ProfileCard
          image={categories}
          title="Add Catergory"
          description="Add category"
          link="/cart"
        />
      </div>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={openSecurity}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>Update Note</DialogTitle>
        <DialogContent>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <TextField
              fullWidth
              hiddenLabel
              size="small"
              name="title"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <TextField
              fullWidth
              hiddenLabel
              size="small"
              name="description"
              id="description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <TextField fullWidth hiddenLabel size="small" name="tag" id="tag" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleClose()}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="success"
            // onClick={() => handleSubmit(enote)}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewProfile;
