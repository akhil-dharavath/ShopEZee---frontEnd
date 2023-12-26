import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, MenuItem, Select } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

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
              <TableCell width="10%">Subtotal</TableCell>
              <TableCell width="25%" align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderss.length > 0 &&
              orderss.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <img src={order.image} alt="login" width={100} />
                  </TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell align="center">1</TableCell>
                  <TableCell>{order.price * order.quantity}</TableCell>
                  <TableCell>
                    {admin ? (
                      <div className="d-flex flex-nowrap justify-content-evenly">
                        <Select
                          name="category"
                          defaultValue={order.status}
                          size="small"
                        >
                          <MenuItem value="Pending">Pending</MenuItem>
                          <MenuItem value="Shipped">Shipped</MenuItem>
                          <MenuItem value="Delivered">Disabled</MenuItem>
                        </Select>
                        <IconButton sx={{ width: "auto" }}>
                          <DoneIcon />
                        </IconButton>
                      </div>
                    ) : (
                      <div className="text-center">{order.status}</div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
