import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(() => ({
  actionSection_FormControl: {
    width: "100%",
  },
  actionSelect: {
    width: "100%",
  },
}));

const FilteredBy = ({ value, handleChange }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.actionSection_FormControl}>
      <InputLabel id="FilteredByLabel">Filtrado por</InputLabel>
      <Select
        labelId="FilteredByLabel"
        id="FilteredBy"
        value={value}
        name="filteredBy"
        className={classes.actionSelect}
        onChange={handleChange}
      >
        <MenuItem value={1}>
          Última actualización (la más reciente primero)
        </MenuItem>
        <MenuItem value={2}>option 1</MenuItem>
        <MenuItem value={3}>option 2</MenuItem>
      </Select>
    </FormControl>
  );
};

FilteredBy.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export { FilteredBy };
