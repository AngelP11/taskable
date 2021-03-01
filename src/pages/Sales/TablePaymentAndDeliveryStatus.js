import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import DoneIcon from "@material-ui/icons/Done";

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
    color: "#2d2d37",
  },
  displayFlex: {
    display: "flex",
  },
  icon: {
    marginRight: 16.5,
  },
  cellCuetas: {
    display: "flex",
    flexDirection: "column",
  },
  doneIcon: {
    color: "#36ecae",
    fontSize: 18,
  },
});

export function TablePaymentAndDeliveryStatus() {
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
                <LocalShippingIcon fontSize="small" className={classes.icon} />{" "}
                Entrega:
              </div>
            </TableCell>
            <TableCell align="right">Pendiente</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              align="left"
              component="th"
              colSpan={2}
              className={`${classes.fontBolder} ${classes.noBorderBottom}`}
            >
              <div className={classes.displayFlex}>
                <HelpOutlineIcon fontSize="small" className={classes.icon} />{" "}
                Estado e información:
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="left"
              className={`${classes.fontBolder} ${classes.noBorderBottom}`}
            >
              Método de pago:
            </TableCell>
            <TableCell align="right" className={classes.noBorderBottom}>
              Por cuotas
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="left" className={classes.noBorderBottom}>
              <div className={classes.cellCuetas}>
                <div>Cuota 3</div>
                <small>
                  Fecha estimada: <br /> 23/05/2020
                </small>
              </div>
            </TableCell>
            <TableCell align="right" className={classes.noBorderBottom}>
              <div className={classes.cellCuetas}>
                <div>$522.26</div>
                <small>Sin cancelar</small>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="left" className={classes.noBorderBottom}>
              <div className={classes.cellCuetas}>
                <div>Cuota 2</div>
                <small>
                  Fecha estimada: <br /> 13/05/2020
                </small>
              </div>
            </TableCell>
            <TableCell align="right" className={classes.noBorderBottom}>
              <div className={classes.cellCuetas}>
                <div>$522.26</div>
                <small style={{ color: "#ff5861" }}>Atrasado</small>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="left" className={classes.noBorderBottom}>
              <div className={classes.cellCuetas}>
                <div>Cuota 3</div>
                <small>
                  Fecha estimada: <br /> 03/05/2020
                </small>
              </div>
            </TableCell>
            <TableCell align="right" className={classes.noBorderBottom}>
              <div className={classes.cellCuetas}>
                <div><DoneIcon className={classes.doneIcon} /> $522.26</div>
                <small>02/05/2020</small>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
