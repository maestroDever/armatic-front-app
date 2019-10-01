import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  titleBold: {
    fontWeight: 600,
  },
  paper: {
    padding: theme.spacing(4),
  },
  formatButton: {
    margin: theme.spacing(4),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));
