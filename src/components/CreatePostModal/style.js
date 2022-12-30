import { FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    margin: "0 0 10px 0",
  },
  title: {
    marginBottom: "10px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
  },
  footer: {
    marginTop: "10px",
  },
}));
