import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

import {
  ViewListOutlined,
  AssessmentOutlined,
  SwapVertOutlined,
  FilterListOutlined,
  MoreVertOutlined,
  TodayOutlined,
  AssignmentOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  second_toolbar: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: "11.4px 12.5px 12px 27px",
  },
  button: {
    opacity: "0.54",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpacing: "0.02px",
    textAlign: "left",
    color: "#2d2d37",
    marginRight: "10px",
    textTransform: "capitalize",
  },
  active: {
    opacity: "1",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpacing: "0.02px",
    textAlign: "left",
    color: "#2979ff",
  },
}));

function SecondToolbar() {
  const classes = useStyles();

  return (
    <Toolbar
      disableGutters={true}
      variant="dense"
      className={classes.second_toolbar}
    >
      <div>
        <Button
          to="/taskable/listas"
          className={`${classes.button}`}
          component={NavLink}
          startIcon={<ViewListOutlined />}
          activeClassName={classes.active}
        >
          Listas
        </Button>
        <Button
          to="/taskable/tablero"
          className={`${classes.button}`}
          component={NavLink}
          startIcon={<AssessmentOutlined />}
          activeClassName={classes.active}
        >
          Tablero
        </Button>
        <Button
          to="/taskable/calendario"
          className={`${classes.button}`}
          component={NavLink}
          startIcon={<TodayOutlined />}
          activeClassName={classes.active}
        >
          Calendario
        </Button>
        <Button
          to="/taskable/cronograma"
          className={`${classes.button}`}
          component={NavLink}
          startIcon={<AssignmentOutlined />}
          activeClassName={classes.active}
        >
          Cronograma
        </Button>
      </div>
      <div>
        <Button
          className={`${classes.button}`}
          startIcon={<SwapVertOutlined />}
        >
          Ordenar
        </Button>
        <Button
          className={`${classes.button}`}
          startIcon={<FilterListOutlined />}
        >
          Filtrar
        </Button>
        <Button
          className={`${classes.button}`}
          startIcon={<MoreVertOutlined />}
        ></Button>
      </div>
    </Toolbar>
  );
}

export { SecondToolbar };
