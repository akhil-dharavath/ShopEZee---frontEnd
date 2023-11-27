import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { Nav, Navbar, Offcanvas, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles/basicNavbar.css";
// import { Menu, MenuItem } from "@mui/material";
import React from "react";
import SimpleDialog from "./CartSidebar";

function OffcanvasExample() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    console.log(value);
    setOpen(false);
  };

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
          <Navbar.Brand href="/" className="text-white">
            ShopEZee
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Link to="/">ShopEZee</Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Link to="/products">EVERYTHING</Link>
                <Link to="/women">WOMEN</Link>
                <Link to="/men">MEN</Link>
                <Link to="/electronics">ELECTRONICS</Link>
              </Nav>
              <Nav>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact-us">CONTACT US</Link>
                <Link
                  // to="/cart"
                  onClick={handleClickOpen}
                >
                  $0.00
                  <ShoppingCartIcon />
                </Link>
                <SimpleDialog open={open} onClose={handleClose} />
                <Link to="/view-profile">
                  <PersonIcon />
                </Link>
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

export default OffcanvasExample;
