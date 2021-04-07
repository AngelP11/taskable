import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  tableContainer: { boxShadow: "none" },
  noBorderBottom: {
    borderBottom: 0,
  },
  table: {
    minWidth: 650,
  },
});

function createData(description, quantity, priceKilo, price) {
  return { description, quantity, priceKilo, price };
}

const rows = [
  createData("Votivos sixpack", "138.69 Kg", "$3,40", "$471,55"),
  createData("Velones citronela", "84.00 Kg", "$3,20", "$268,80"),
  createData("Envases de vidrio", "237.26 Kg", "$4,00", "$949,04"),
  createData("Envases de plástico", "237.26 Kg", "$4,00", "$949,04"),
];

export function TableSaleDetails() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Descripción</TableCell>
            <TableCell align="left">Cantidad Kg</TableCell>
            <TableCell align="center">$/Kg</TableCell>
            <TableCell align="right">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.description}>
              <TableCell align="left" component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="center">{row.priceKilo}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className={classes.noBorderBottom} colSpan={3} />
            <TableCell className={classes.noBorderBottom} align="right">$ Total: $1,566.78</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
