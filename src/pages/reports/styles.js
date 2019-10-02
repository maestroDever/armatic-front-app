import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  titleBold: {
    fontWeight: 600,
  },
  iconsBar: {
    marginBottom: theme.spacing(4),
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.text.hint + "80",
  },
  paper: {
    padding: theme.spacing(1),
  },
  materialIconText: {
    marginLeft: theme.spacing(2),
    fontSize: 14,
  },
  iconsContainer: {
    boxShadow: theme.customShadows.widget,
    overflow: "hidden",
    paddingBottom: theme.spacing(2),
  },
  downloadButton: {
    margin: theme.spacing(4),
    padding: theme.spacing(2),
  },
  csvLink: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));
