import React from "react";
import Layout from "./../../components/Layout";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { EditIcon } from "./../../components/Icons/EditIcon";
import { Breadcrumb } from "./../../components/Breadcrumb";
import { TableSaleDetails } from "./TableSaleDetails";

import Grid from "@material-ui/core/Grid";

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
  flexSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  titlePrimary: {
    margin: 0,
    padding: 0,
    opacity: "0.87",
    fontFamily: "Manrope",
    fontSize: "25px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.38",
    letterSpacing: "0.04px",
    textAlign: "left",
    color: "#2d2d37",
  },
}));

export const SaleDetails = () => {
  const classes = useStyles();

  const navs = [
    {
      title: "Inicio >",
      to: "/taskable/home",
    },
    {
      title: "Ventas >",
      to: "/taskable/sales",
    },
    {
      title: "Descripción de la oden Superwax N0012",
      to: null,
    },
  ];

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.flexSpaceBetween}>
          <Breadcrumb navs={navs} />
          <div style={{ marginRight: 0 }}>
            <IconButton
              aria-label="more"
              className={classes.margin}
              size="small"
            >
              <MoreVertIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
        <div className={classes.rectangle}>
          <div className={classes.flexSpaceBetween}>
            <h6 className={classes.titlePrimary}>Detalles de la venta</h6>
            <div>
              <IconButton
                aria-label="edit"
                className={classes.margin}
                size="small"
              >
                <EditIcon fontSize="inherit" />
              </IconButton>
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <TableSaleDetails />
          </div>
        </div>

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className={classes.rectangle}>
                <div className={classes.flexSpaceBetween}>
                  <h6 className={classes.titlePrimary}>
                    Información de la orden
                  </h6>
                  <div>
                    <IconButton
                      aria-label="edit"
                      className={classes.margin}
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.rectangle}>
                <div className={classes.flexSpaceBetween}>
                  <h6 className={classes.titlePrimary}>
                    Estado de pago y entrega
                  </h6>
                  <div>
                    <IconButton
                      aria-label="edit"
                      className={classes.margin}
                      size="small"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};