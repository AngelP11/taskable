import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
  NotificationsOutlined,
  SettingsOutlined,
} from "@material-ui/icons";

import { buttons } from "../styles/buttons.js";
import globals from "../styles/globals.js";

/* Assets */
import "./styles/Header.css";
import persona1 from "../assets/imagen-4.png";
import persona2 from "../assets/imagen-24.png";
import persona3 from "../assets/imagen-25.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mr2: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "0px 0px 0px #fff",
  },
  second_toolbar: {
    marginLeft: 240,
    display: "flex",
    justifyContent: "space-between",
  },
  ...buttons,

  button_high_local: {
    backgroundColor: "transparent",
    color: "grey",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f5f5f5",
      boxShadow: "none",
    },
  },
  active: {
    color: "#2979ff",
  },
  ...globals,
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} color="default">
      <Toolbar
        disableGutters={true}
        style={{ borderBottom: "1px solid lightgrey" }}
      >
        <div className={classes.root}>
          <div className="container">
            <div className="Header-logoContainer">
              <Link href="http://localhost:3000/taskable/" underline="none">
                <Typography variant="h5" className={classes.title} gutterBottom>
                  Taskable <span className={classes.appText}>app</span>
                </Typography>
              </Link>
            </div>
            <div className="Header-Container">
              <article className="Header-infoContainer">
                <div className="Header-infoIcono"></div>
                <div className="Header-info">
                  <p className="Header-infoTitle">Ventas y administracion</p>

                  <div className="Header-infoTeamContainer">
                    <div className="team_container">
                      <p className="Header-infoCompany">Multiceras</p>
                      <div className="Header-infoTeam ml_10">
                        <img id="member1" src={persona1} alt="1" />
                        <img id="member2" src={persona2} alt="2" />
                        <img id="member3" src={persona3} alt="3" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="Header-infoContainer">
                <NotificationsOutlined
                  style={{ color: "grey" }}
                  className={classes.mr2}
                />
                <SettingsOutlined
                  style={{ color: "grey" }}
                  className={classes.mr2}
                />
                <div className="Header-userImage"></div>
              </article>
            </div>
          </div>
        </div>
      </Toolbar>

    </AppBar>
  );
}

export default Header;
