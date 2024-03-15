import React, { useState } from "react";
import {
  IconButton,
  MenuItem,
  Select,
  TableCell,
  TableRow,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { updateOrderApi } from "../api/adminFeatures";
import { enqueueSnackbar } from "notistack";

const OrderRow = ({ order, admin }) => {
  const [status, setStatus] = useState(order.status);
  const updateOrder = async () => {
    const response = await updateOrderApi(order._id, status);
    if (response.data && response.data._id) {
      enqueueSnackbar("Order Updated!", { variant: "success" });
    } else {
      enqueueSnackbar(response.response.data.message, { variant: "error" });
    }
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        <img src={order.image} alt={order.name} width={100} />
      </TableCell>
      <TableCell>{order.name}</TableCell>
      <TableCell>{order.price}</TableCell>
      <TableCell align="center">{order.quantity}</TableCell>
      <TableCell>{order.price * order.quantity}</TableCell>
      <TableCell>
        {admin ? (
          <div className="d-flex flex-nowrap justify-content-evenly">
            <Select
              name="category"
              value={status}
              size="small"
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Shipped">Shipped</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
            </Select>
            <IconButton sx={{ width: "auto" }} onClick={() => updateOrder()}>
              <DoneIcon />
            </IconButton>
          </div>
        ) : (
          <div className="text-center">{order.status}</div>
        )}
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
