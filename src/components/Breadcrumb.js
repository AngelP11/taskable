import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  listNav: {
    margin: 0,
    padding: 0,
    display: "flex",
    gap: "5px",
    height: "24px",
    fontFamily: "Manrope !important",
  },
  listItem: {
    listStyle: "none",
    fontFamily: "Manrope !important",
    fontSize: "18px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpacing: "0.02px",
    textAlign: "right",
    color: "#2979ff",
  },
  isLink: {
    cursor: "pointer",
  },
}));

const Breadcrumb = ({ navs }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = (to) => {
    if (to) {
      history.push(to);
    }
  };

  return (
    <ul className={classes.listNav}>
      {navs.map((nav, index) => (
        <li
          key={index}
          className={
            nav.to ? `${classes.listItem} ${classes.isLink}` : classes.listItem
          }
          onClick={() => handleClick(nav.to)}
        >
          {nav.title}
        </li>
      ))}
    </ul>
  );
};

Breadcrumb.propTypes = {
  navs: PropTypes.array.isRequired,
};

export { Breadcrumb };
