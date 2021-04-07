import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PersonIcon from "@material-ui/icons/Person";
import FlagIcon from "@material-ui/icons/Flag";
import PlaceIcon from "@material-ui/icons/Place";
import ReceiptIcon from "@material-ui/icons/Receipt";

const useStyles = makeStyles({
  tableContainer: { boxShadow: "none" },
  noBorderBottom: {
    borderBottom: 0,
  },
  table: {
    minWidth: 350,
    color: "#2d2d37",
  },
  fontBolder: {
    fontWeight: "bolder",
  },
  displayFlex: {
    display: "flex",
  },
  icon: {
    marginRight: 16.5,
  },
});

export function TableOrderInformation() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              component="th"
              className={classes.fontBolder}
            >
              <div className={classes.displayFlex}>
                <PersonIcon fontSize="small" className={classes.icon} /> Cliente
              </div>
            </TableCell>
            <TableCell align="right">Superwax C.A.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              align="left"
              component="th"
              className={classes.fontBolder}
            >
              <div className={classes.displayFlex}>
                <FlagIcon fontSize="small" className={classes.icon} /> Tipo:
              </div>
            </TableCell>
            <TableCell align="right">Nacional</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="left"
              component="th"
              className={classes.fontBolder}
            >
              <div className={classes.displayFlex}>
                <PlaceIcon fontSize="small" className={classes.icon} />{" "}
                Ubicación:
              </div>
            </TableCell>
            <TableCell align="right">
              Guárico San Juan de los Morros Pueblo nuevo, calle 50
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="left"
              component="th"
              className={`${classes.fontBolder} ${classes.noBorderBottom}`}
            >
              <div className={classes.displayFlex}>
                <ReceiptIcon fontSize="small" className={classes.icon} />{" "}
                Referencia:
              </div>
            </TableCell>
            <TableCell className={classes.noBorderBottom} align="right">
              N0012
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
