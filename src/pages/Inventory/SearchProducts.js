import React from "react";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  actionSection_FormControl: {
    width: "100%",
  },
  actionInput: {
    width: "100%",
    padding: "0px 10px 0px 10px !important",
  },
}));

export const SearchProducts = () => {
  const classes = useStyles();

  return (
    <FormControl className={classes.actionSection_FormControl}>
      <InputLabel htmlFor="input-with-icon-adornment">
        Buscar productos
      </InputLabel>
      <Input
        className={classes.actionInput}
        id="input-with-icon-adornment"
        label="Buscar productos"
        placeholder="Buscar productos"
        variant="outlined"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
