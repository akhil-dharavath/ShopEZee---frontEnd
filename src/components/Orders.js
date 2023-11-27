import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import login from "../assets/images/login.jpg";
import { IconButton, MenuItem, Select } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const Orders = ({ admin }) => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
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
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <img src={login} alt="login" width={100} />
                </TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align="center">1</TableCell>
                <TableCell>sub total</TableCell>
                <TableCell>
                  {admin ? (
                    <div className="d-flex flex-nowrap justify-content-evenly">
                      <Select name="category" defaultValue={0} size="small">
                        <MenuItem value={0}>Pending</MenuItem>
                        <MenuItem value={1}>Shipped</MenuItem>
                        <MenuItem value={2}>Disabled</MenuItem>
                      </Select>
                      <IconButton sx={{ width: "auto" }}>
                        <DoneIcon />
                      </IconButton>
                    </div>
                  ) : (
                    <div className="text-center">status</div>
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
