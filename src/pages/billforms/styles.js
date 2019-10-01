import { makeStyles } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";

export default makeStyles(theme => ({
  dashedBorder: {
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  text: {
    marginBottom: theme.spacing(1),
  },
  textField: {
    maringLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(4),
  },
  boldSummary: {
    fontWeight: 800,
    fontSize: 18,
  },
  uploadButton: {
    margin: theme.spacing(4),
  },
  button: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));
