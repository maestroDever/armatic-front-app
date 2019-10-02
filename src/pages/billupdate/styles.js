import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  titleBold: {
    fontWeight: 600,
  },
  paper: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paperText: {
    padding: theme.spacing(1),
  },
  formatButton: {
    margin: theme.spacing(4),
    padding: theme.spacing(2),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));
