import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  orders,
  security,
  contact,
  product,
  user_orders,
  categories,
  address,
  remove,
  log_out,
} from "../routes/ImgRouters";
import ProfileCard from "../components/ProfileCard";
import ProfileDialog from "../components/ProfileDialog";

const ViewProfile = () => {
  const [openSecurity, setOpenSecurity] = useState(false);
  const [addProducts, setAddProducts] = useState(false);
  const [category, setCategory] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [logout, setLogout] = useState(false);

  const [userDetails, setuserDetails] = useState({
    email: "",
    username: "",
    password: "",
    "Current password": "",
  });

  const [productDetails, setProductDetails] = useState({
    "Product Name": "",
    Category: "",
    "Sub category": "",
    "Image url": "",
  });

  const [categoryDetails, setCategoryDetails] = useState({
    Category: "",
    "Sub category": "",
  });

  const [addressDetails, setAddressDetails] = useState({
    Category: "",
    "Sub category": "",
  });

  const location = useLocation();
  useEffect(() => {
    document.querySelector(".footer").style.display = "none";
  }, [location]);

  const handleClose = () => {
    setOpenSecurity(false);
    setAddProducts(false);
    setCategory(false);
    setAddAddress(false);
    setDeleteAccount(false);
    setLogout(false);
  };

  return (
    <div>
      <h1 className="p-5">Your Account</h1>
      <div className="account-cards">
        <ProfileCard
          image={orders}
          title="Your Orders"
          description="Track, return, or buy things again"
          link="/orders"
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
          image={address}
          title="Add Address"
          description="Edit or update address for orders"
          onClick={() => setAddAddress(true)}
        />
        <ProfileCard
          image={remove}
          title="Delete Account"
          description="Delete your account"
          onClick={() => setDeleteAccount(true)}
        />
        <ProfileCard
          image={product}
          title="Add Products"
          description="Add any new products"
          onClick={() => setAddProducts(true)}
        />
        <ProfileCard
          image={user_orders}
          title="User Orders"
          description="Track and update user products"
          link="/user-orders"
        />
        <ProfileCard
          image={categories}
          title="Add Catergory"
          description="Add category"
          onClick={() => setCategory(true)}
        />
        <ProfileCard
          image={log_out}
          title="Log Out"
          description="Log out from your account"
          onClick={() => setDeleteAccount(true)}
        />
      </div>
      
      <ProfileDialog
        title="Update Profile"
        details={userDetails}
        setDetails={setuserDetails}
        textfields={[
          {
            id: 1,
            label: "email",
            placeholder: "Enter email",
          },
          {
            id: 2,
            label: "username",
            placeholder: "Enter username",
          },
          {
            id: 3,
            label: "password",
            placeholder: "Enter password",
          },
          {
            id: 4,
            label: "Current password",
            placeholder: "Enter current password",
          },
        ]}
        buttons={[
          { id: "1", name: "cancel", color: "error", click: handleClose },
          { id: "2", name: "save", color: "success", click: handleClose },
        ]}
        open={openSecurity}
      />

      <ProfileDialog
        title="Add Product"
        details={productDetails}
        setDetails={setProductDetails}
        textfields={[
          {
            id: 1,
            label: "Product Name",
            placeholder: "Enter Product Name",
          },
          {
            id: 2,
            label: "Category",
            placeholder: "Enter Category",
          },
          {
            id: 3,
            label: "Sub category",
            placeholder: "Enter Sub category",
          },
          {
            id: 4,
            label: "Image url",
            placeholder: "Enter Image url",
          },
        ]}
        selects={[
          {
            id: 1,
            label: "select category",
            options: [
              { key: 0, value: "Select Option" },
              { key: 1, value: "Pending" },
              { key: 2, value: "Shipped" },
              { key: 3, value: "Delivered" },
            ],
          },
        ]}
        buttons={[
          { id: "1", name: "cancel", color: "error", click: handleClose },
          { id: "2", name: "add", color: "success", click: handleClose },
        ]}
        open={addProducts}
      />

      <ProfileDialog
        title="Add Category"
        details={categoryDetails}
        setDetails={setCategoryDetails}
        textfields={[
          {
            id: 1,
            label: "Category",
            placeholder: "Enter Category",
          },
          {
            id: 2,
            label: "Sub category",
            placeholder: "Enter Sub category",
          },
        ]}
        buttons={[
          { id: "1", name: "cancel", color: "error", click: handleClose },
          { id: "2", name: "add", color: "success", click: handleClose },
        ]}
        open={category}
      />

      <ProfileDialog
        title="Delivery Address"
        details={addressDetails}
        setDetails={setAddressDetails}
        textfields={[
          {
            id: 1,
            label: "Address",
            placeholder: "Enter Address",
          },
        ]}
        buttons={[
          { id: "1", name: "cancel", color: "error", click: handleClose },
          { id: "2", name: "add", color: "success", click: handleClose },
        ]}
        open={addAddress}
      />

      <ProfileDialog
        title="Delete Account"
        content="Are you sure you want to delete account?"
        buttons={[
          { id: "1", name: "no", color: "error", click: handleClose },
          { id: "2", name: "yes", color: "success", click: handleClose },
        ]}
        open={deleteAccount}
      />

      <ProfileDialog
        title="Log out"
        content="Are you sure you want to Log out?"
        buttons={[
          { id: "1", name: "no", color: "error", click: handleClose },
          { id: "2", name: "yes", color: "success", click: handleClose },
        ]}
        open={logout}
      />
    </div>
  );
};

export default ViewProfile;
