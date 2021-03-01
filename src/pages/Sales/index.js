import React from "react";
import Layout from "./../../components/Layout";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Breadcrumb } from "./../../components/Breadcrumb";

const useStyles = makeStyles(() => ({
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
    fontFamily: "Manrope",
    fontSize: "32px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.38",
    letterSpacing: "0.04px",
    textAlign: "left",
    color: "#2d2d37",
  },
}));

export const Sales = () => {
  const classes = useStyles();

  const navs = [
    {
      title: "Inicio >",
      to: "/taskable/home",
    },
    {
      title: "Ventas",
      to: null,
    },
  ];

  return (
    <Layout>
      <div className={classes.container}>
        <Breadcrumb navs={navs} />
        <div className={classes.rectangle}>
          <div className={classes.header}>
            <h6 className={classes.titlePrimary}>Ventas</h6>

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
        </div>
      </div>
    </Layout>
  );
};
