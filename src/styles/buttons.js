// import { withStyles } from '@material-ui/core/styles'

const buttons = {
  button_high: {
    height: 36,
    padding: "8px 16px 8px 16px",
    boxShadow: "none",
    borderRadius: 6,
    backgroundColor: "#2979ff",
    color: "white",
    fontFamily: "Manrope !important",
    textTransform: "capitalize",
    fontSize: 14,
    lineHeight: "12px",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#2979ff",
      boxShadow: "0 1px 3px 2px rgba(0, 0, 0, .2)",
    },
    "&:active": {
      backgroundColor: "#2979ff",
      boxShadow: "0px 8px 9px 0px rgba(122, 76, 255, .24)",
    },
    "&:disabled": {
      backgroundColor: "#F2F2F2",
      color: "rgba(0, 0, 0, .38)",
    },
  },
  button_normal: {
    height: 40,
    lineHeight: "15px",
    // margin: 10,
    padding: "8px 16px 8px 16px",
    boxShadow: "none",
    borderRadius: 6,
    // backgroundColor: '#fff',
    borderColor: "#e1e2e6",
    border: "1px solid",
    // color: '#7A4CFF',
    fontFamily: "Manrope !important",
    textTransform: "capitalize",
    fontSize: 14,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(41, 121, 255, .80)",
      borderColor: "rgba",
    },
    "&:active": {
      backgroundColor: "rgba(41, 121 , 255, .80)",
    },
    "&:disabled": {
      borderColor: "rgba(0, 0, 0, .38)",
      color: "rgba(0, 0, 0, .38)",
    },
  },
  button_low: {
    lineHeight: "12px",
    height: 36,
    padding: "8px 16px 8px 16px",
    boxShadow: "none",
    borderRadius: 4,
    backgroundColor: "#fff",
    color: "#7A4CFF",
    fontFamily: "Manrope !important",
    textTransform: "capitalize",
    fontSize: 14,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#fff",
      color: "#9773FF",
    },
    "&:active": {
      backgroundColor: "rgba(186,162,255, .20)",
    },
    "&:disabled": {
      color: "rgba(0, 0, 0, .38)",
    },
  },
};

const ripple = (theme) => ({
  child: {
    backgroundColor: "rgba(186,162,255)",
  },
});

export { buttons, ripple };
