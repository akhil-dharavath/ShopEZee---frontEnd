import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "../../assets/styles/basicNavbar.css";
import React, { useEffect, useState } from "react";
import SimpleDialog from "../CartSidebar";
import { Badge } from "@mui/material";
import { isEmpty } from "ramda";
import { name_transparant } from "../../routes/ImgRouters";

function BasicNavbar({ userDetails, handleGetUser }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.getItem("token") && handleGetUser();
    // eslint-disable-next-line
  }, []);

  // console.log(userDetails);

  return (
    <div>
      <Navbar
        expand={"lg"}
        className="mb-3"
        fixed="top"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          {/*<Navbar.Brand href="/" className="text-white">
            ShopEZee
          </Navbar.Brand>*/}
          <Link to={"/"}>
            <img
              src={name_transparant}
              alt="logo"
              style={{
                height: 50,
                filter: "invert(100%)",
                margin: "0px 30px 0px 0px",
              }}
            />
          </Link>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-lg`}
            onClick={() => setActive(!active)}
          />
          {/* navbar-toggler navbar-toggler collapsed */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            // className={`${!active?'d-none':''}`}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Link to="/">ShopEZee</Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Link
                  className="link"
                  to="/products"
                  onClick={() => setActive(!active)}
                >
                  EVERYTHING
                </Link>
                <Link className="link" to="/women">
                  WOMEN
                </Link>
                <Link className="link" to="/men">
                  MEN
                </Link>
                <Link className="link" to="/electronics">
                  ELECTRONICS
                </Link>
              </Nav>
              <Nav>
                <Link className="link" to="/about">
                  ABOUT
                </Link>
                <Link className="link" to="/contact-us">
                  CONTACT US
                </Link>
                {!isEmpty(userDetails) && (
                  <Link onClick={handleClickOpen}>
                    <Badge
                      badgeContent={value}
                      color="info"
                      className="hide_mobile"
                    >
                      <ShoppingCartIcon />
                    </Badge>
                    <p className="show_mobile">CART</p>
                  </Link>
                )}

                {/* shopping cart */}
                <SimpleDialog
                  open={open}
                  onClose={handleClose}
                  setValue={setValue}
                />

                {isEmpty(userDetails) ? (
                  <Link className="link" to="/auth/login">
                    LOGIN
                  </Link>
                ) : (
                  <>
                    <Link to="/your-account" className="hide_mobile">
                      <PersonIcon />
                    </Link>
                    <Link to="/your-account">
                      <p className="show_mobile">VIEW PROFILE</p>
                    </Link>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default BasicNavbar;
