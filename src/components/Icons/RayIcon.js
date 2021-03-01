import React from "react";
import image from "./../../assets/images/rayo.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  contentRayo: {
    position: "relative",
    fontSize: "0 !important",
    "&:before": {
      right: "-3px",
      width: "15px",
      bottom: "-3px",
      height: "15px",
      content: '"\\00a0"',
      position: "absolute",
      borderRadius: "50%",
      backgroundColor: "#36b37e",
      border: "solid #fff",
    },
  },
}));

const RayIcon = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentRayo}>
      <img src={image} alt="rayo" srcSet={image} />
    </div>
  );
};

export { RayIcon };
