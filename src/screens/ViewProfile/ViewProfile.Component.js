import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
} from "../../routes/ImgRouters";
import ProfileCard from "../../components/ProfileCard";
import ProfileDialog from "../../components/ProfileDialog";
import { isEmpty } from "ramda";

const ViewProfile = ({
  setLogin,
  handleAddCategory,
  handleDeleteAccount,
  handleAddProduct,
  fetchProducts,
  getCategories,
  fetchCategories,
  handleUpdateUser,
  getUserDetails,
}) => {
  const [openSecurity, setOpenSecurity] = useState(false);
  const [addProducts, setAddProducts] = useState(false);
  const [category, setCategory] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogin(undefined);
    localStorage.removeItem("token");
  };

  const handleSubmitCategory = (data) => {
    setCategory(false);
    handleAddCategory(data);
  };

  const handleSubmitDelete = () => {
    handleDeleteAccount();
    setDeleteAccount(false);
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  const addProduct = async (data) => {
    await handleAddProduct(data, getCategories);
    await fetchProducts();
    setAddProducts(false);
  };

  const callCategories = async () => {
    await fetchCategories();
  };

  useEffect(() => {
    callCategories();
    // eslint-disable-next-line
  }, [addProducts]);

  // console.log(getUserDetails.email, getUserDetails.username);
  // const Username = !isEmpty(getUserDetails) ? getUserDetails.username : "";
  // const Email = !isEmpty(getUserDetails) ? getUserDetails.email : "";
  const [userDetails, setuserDetails] = useState({
    Email: getUserDetails.email,
    Username: getUserDetails.username,
    Password: "",
    "Confirm password": "",
    "Current password": "",
  });

  const [productDetails, setProductDetails] = useState({
    "Product Name": "",
    "Product Description": "",
    Category: 0,
    "Sub category": 0,
    "Image url": "",
    Price: "",
    Stock: "",
  });

  const [categoryDetails, setCategoryDetails] = useState({
    Category: "",
    "Sub category": "",
  });

  const [addressDetails, setAddressDetails] = useState({
    Address: "",
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
        {!isEmpty(getUserDetails) && getUserDetails.role === "admin" && (
          <ProfileCard
            image={product}
            title="Add Products"
            description="Add any new products"
            onClick={() => setAddProducts(true)}
          />
        )}
        {!isEmpty(getUserDetails) && getUserDetails.role === "admin" && (
          <ProfileCard
            image={user_orders}
            title="User Orders"
            description="Track and update user products"
            link="/user-orders"
            role={getUserDetails.role}
          />
        )}
        {!isEmpty(getUserDetails) && getUserDetails.role === "admin" && (
          <ProfileCard
            image={categories}
            title="Add Catergory"
            description="Add category"
            onClick={() => setCategory(true)}
          />
        )}
        <ProfileCard
          image={log_out}
          title="Log Out"
          description="Log out from your account"
          onClick={() => setLogout(true)}
        />
      </div>

      <ProfileDialog
        title="Update Profile"
        details={userDetails}
        setDetails={setuserDetails}
        textfields={[
          {
            id: 1,
            label: "Email",
            placeholder: "Enter email",
          },
          {
            id: 2,
            label: "Username",
            placeholder: "Enter username",
          },
          {
            id: 3,
            label: "Password",
            placeholder: "Enter password",
          },
          {
            id: 4,
            label: "Confirm password",
            placeholder: "Confirm password",
          },
          {
            id: 5,
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
            label: "Product Description",
            placeholder: "Enter Product Description",
          },
          {
            id: 3,
            label: "Image url",
            placeholder: "Enter Image url",
          },
          {
            id: 4,
            label: "Price",
            placeholder: "Enter Price of the Product",
          },
          {
            id: 5,
            label: "Stock",
            placeholder: "Enter Stock amount",
          },
        ]}
        selects={[
          {
            id: 1,
            label: "Category",
            options: getCategories.map((cat, index) => {
              return { key: index, value: cat.name };
            }),
          },
          {
            id: 2,
            label: "Sub category",
            options: getCategories[productDetails.Category]
              ? getCategories[productDetails.Category].description.map(
                  (cat, index) => {
                    return { key: index, value: cat };
                  }
                )
              : [{ key: 0, value: "Select option" }],
          },
        ]}
        buttons={[
          { id: "1", name: "cancel", color: "error", click: handleClose },
          { id: "2", name: "add", color: "success", click: addProduct },
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
          {
            id: "2",
            name: "add",
            color: "success",
            click: handleSubmitCategory,
          },
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
          { id: "2", name: "yes", color: "success", click: handleSubmitDelete },
        ]}
        open={deleteAccount}
      />

      <ProfileDialog
        title="Log out"
        content="Are you sure you want to Log out?"
        buttons={[
          { id: "1", name: "no", color: "error", click: handleClose },
          { id: "2", name: "yes", color: "success", click: handleLogout },
        ]}
        open={logout}
      />
    </div>
  );
};

export default ViewProfile;
