import React from "react";
import Layout from "./../../components/Layout";
import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { SearchProducts } from "./SearchProducts";
import { FilteredBy } from "./FilteredBy";
import TableInventory from "./TableInventory";
import { Breadcrumb } from "./../../components/Breadcrumb";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "32px 32px 0 0",
    padding: "32px 56px 58px 48px",
    backgroundColor: "#f6f6f8",
    borderRadius: "24px 24px 0 0",
  },
  rectangle: {
    margin: "20px 0 0 0",
    padding: "40px 32px 40px 32px",
    borderRadius: "24px",
    boxShadow: "0 10px 14px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#ffffff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  titlePrimary: {
    margin: 0,
    padding: 0,
    opacity: "0.87",
    fontFamily: "Manrope !important",
    fontSize: "25px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.38",
    letterSpacing: "0.04px",
    textAlign: "left",
    color: "#2d2d37",
  },
  actionSection: {
    display: "flex",
    marginTop: "20px",
    marginBottom: "10px",
    justifyContent: "space-between",
    width: "100%",
  },
  actionSection_item: {
    width: "40%",
  },
  actionSection_FormControl: {
    width: "100%",
  },
  actionInput: {
    width: "100%",
  },
  actionSelect: {
    width: "100%",
  },
  filtersSection: {
    display: "flex",
    gap: "15px",
    marginTop: "30px",
    alignItems: "flex-end",
  },
  filtersSectionItem: {
    minWidth: "200px",
  },
  cotenTableInventory: {
    marginTop: "30px",
  },
}));

export const Inventory = () => {
  const classes = useStyles();

  const [dataFilteres, setDataFilteres] = React.useState({
    filteredBy: 1,
    category: 1,
    availability: 1,
    checked: false,
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setDataFilteres({ ...dataFilteres, [name]: value });
  };

  const handleChangeChecked = (event) => {
    setDataFilteres({ ...dataFilteres, checked: event.target.checked });
  };

  const navs = [
    {
      title: "Inicio >",
      to: "/taskable/home",
    },
    {
      title: "Inventario",
      to: null,
    },
  ];

  return (
    <Layout>
      <div className={classes.container}>
        <Breadcrumb navs={navs} />
        <div className={classes.rectangle}>
          <div className={classes.header}>
            <h6 className={classes.titlePrimary}>Inventario</h6>

            <div>
              <IconButton
                aria-label="delete"
                className={classes.margin}
                size="small"
              >
                <MoreVertIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>

          <div className={classes.actionSection}>
            <div className={classes.actionSection_item}>
              <SearchProducts />
            </div>
            <div className={classes.actionSection_item}>
              <FilteredBy
                value={dataFilteres.filteredBy}
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className={classes.filtersSection}>
            <div className={classes.filtersSectionItem}>
              <FormControl className={classes.actionSection_FormControl}>
                <InputLabel id="category-label">Categoría</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  name="category"
                  value={dataFilteres.category}
                  className={classes.actionSelect}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Todos</MenuItem>
                  <MenuItem value={2}>option 1</MenuItem>
                  <MenuItem value={3}>option 2</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.filtersSectionItem}>
              <FormControl className={classes.actionSection_FormControl}>
                <InputLabel id="availability-label">Disponibilidad</InputLabel>
                <Select
                  labelId="availability-label"
                  id="availability"
                  name="availability"
                  value={dataFilteres.availability}
                  className={classes.actionSelect}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Todos</MenuItem>
                  <MenuItem value={2}>option 1</MenuItem>
                  <MenuItem value={3}>option 2</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.filtersSectionItem}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dataFilteres.checked}
                    onChange={handleChangeChecked}
                    name="checked"
                    color="primary"
                  />
                }
                label="En Stock"
              />
            </div>
          </div>

          <div className={classes.cotenTableInventory}>
            <TableInventory />
          </div>
        </div>
      </div>
    </Layout>
  );
};
