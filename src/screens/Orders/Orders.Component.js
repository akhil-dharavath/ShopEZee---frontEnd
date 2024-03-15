import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderRow from "../../components/OrderRow";

const Orders = ({
  admin,
  orders,
  handleGetOrders,
  userOrders,
  fetchUserOrders,
}) => {
  useEffect(() => {
    if (admin) {
      fetchUserOrders();
    } else {
      handleGetOrders();
    }
    // eslint-disable-next-line
  }, []);

  const [orderss, setOrderss] = useState([]);
  useEffect(() => {
    if (admin) {
      setOrderss(userOrders);
    } else {
      setOrderss(orders);
    }
    // eslint-disable-next-line
  }, [userOrders, orders]);

  return (
    <div className="shopping-cart">
      <h1>Orders</h1>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="20%"></TableCell>
              <TableCell width="25%">Product</TableCell>
              <TableCell width="10%">Price</TableCell>
              <TableCell width="10%">Quantity</TableCell>
              <TableCell width="10%">Sub Total</TableCell>
              <TableCell width="25%" align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderss.length > 0 &&
              orderss.map((order) => (
                <OrderRow key={order._id} order={order} admin={admin} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
