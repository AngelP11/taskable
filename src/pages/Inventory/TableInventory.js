import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import ImageIcon from "@material-ui/icons/Image";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import { EditIcon } from "./../../components/Icons/EditIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  alertState: {
    margin: "39px 225px 33px 132px",
    padding: "6px 10px",
    opacity: "0.32",
    borderRadius: "6px",
  },
  margin: {
    margin: 0,
  },
  alertTableInventory: {
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.14",
    letterSpacing: "0.02px",
    textAlign: "left",
  },
  contenImageIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "48px",
    height: "48px",
    borderRadius: "8px",
    backgroundColor: "#e9e9e9",
  },
  imageIcon: {
    width: "25.5px",
    height: "25.5px",
    color: "#aeaeae",
  },
}));

function createData(labelId, image, name, state, quantity, variants) {
  return { labelId, image, name, state, quantity, variants };
}

const headCells = [
  {
    id: "image",
    align: "center",
    sortable: "none",
    disablePadding: true,
    label: "",
  },
  {
    id: "name",
    align: "left",
    sortable: "none",
    disablePadding: false,
    label: "Nombre",
  },
  {
    id: "state",
    align: "left",
    sortable: "none",
    disablePadding: true,
    label: "Estado",
  },
  {
    id: "quantity",
    align: "center",
    sortable: "none",
    disablePadding: false,
    label: "Cantidad",
  },
  {
    id: "variants",
    align: "center",
    sortable: "none",
    disablePadding: false,
    label: "Variantes",
  },
  {
    id: "actions",
    align: "left",
    sortable: "none",
    disablePadding: true,
    label: "",
  },
];

function TableInventoryHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            color="primary"
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "default"}
            sortable={headCell.sortable}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableInventoryHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function TableInventory() {
  const classes = useStyles();
  const [order] = React.useState("asc");
  const [orderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    console.log({ event, property });
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((item) => item.labelId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const rows = [
    createData(
      1,
      <ImageIcon className={classes.imageIcon} />,
      "Charlie Tulip Dress",
      <Alert
        icon={false}
        className={classes.alertTableInventory}
        severity="success"
      >
        DISPONIBLE
      </Alert>,
      24,
      1
    ),
    createData(
      2,
      <ImageIcon className={classes.imageIcon} />,
      "Charlie Tulip Dress",
      <Alert
        icon={false}
        className={classes.alertTableInventory}
        severity="success"
      >
        DISPONIBLE
      </Alert>,
      0,
      0
    ),
    createData(
      3,
      <ImageIcon className={classes.imageIcon} />,
      "Charlie Tulip Dress",
      <Alert
        icon={false}
        className={classes.alertTableInventory}
        severity="error"
      >
        AGOTADO
      </Alert>,
      13,
      5
    ),
    createData(
      4,
      <ImageIcon className={classes.imageIcon} />,
      "Charlie Tulip Dress",
      <Alert
        icon={false}
        className={classes.alertTableInventory}
        severity="success"
      >
        DISPONIBLE
      </Alert>,
      3,
      1
    ),
    createData(
      5,
      <ImageIcon className={classes.imageIcon} />,
      "Charlie Tulip Dress",
      <Alert
        icon={false}
        className={classes.alertTableInventory}
        severity="warning"
      >
        POCAS UNIDADES
      </Alert>,
      10,
      5
    ),
    createData(
      6,
      <ImageIcon className={classes.imageIcon} />,
      "Charlie Tulip Dress",
      <Alert
        icon={false}
        className={classes.alertTableInventory}
        severity="success"
      >
        DISPONIBLE
      </Alert>,
      100,
      5
    ),
  ];

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <TableInventoryHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.labelId);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={labelId}
                    selected={isItemSelected}
                  >
                    <TableCell
                      role="checkbox"
                      onClick={(event) => handleClick(event, row.labelId)}
                      padding="checkbox"
                    >
                      <Checkbox
                        checked={isItemSelected}
                        color="primary"
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      width="80px"
                      align="center"
                    >
                      <div className={classes.contenImageIcon}>{row.image}</div>
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left" width="150px" padding="none">
                      {row.state}
                    </TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">{row.variants}</TableCell>
                    <TableCell align="left" padding="none">
                      <IconButton aria-label="edit" className={classes.margin}>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
