import React from "react";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// components
import PageTitle from "../../components/PageTitle/PageTitle";
// styles
import useStyles from "./styles";

const datatableData = [
  ["HD-1201", "2019-09-28", 101, "Rahul Dravid", "Compensation", 100000, "INR"],
  [
    "HD-1201",
    "2019-09-28",
    101,
    "Rahul Dravid",
    "Off Cycle Bonus",
    20000,
    "INR",
  ],
  ["HD-1201", "2019-09-28", 101, "Rahul Dravid", "PEO Fees", 1000, "USD"],
];

export default function Tables() {
  var classes = useStyles();
  return (
    <>
      <PageTitle title="Upload Excel Data For the Invoice" />

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.paperText} variant="h6" size="sm">
              Excel Upload has to be in attached format
            </Typography>
            <Button variant="contained" color="primary">
              <CloudUploadIcon className={classes.leftIcon} />
              Upload Excel
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={[
              "Invoice No",
              "Invoice Date",
              "Employee ID",
              "Name",
              "Item",
              "Amount",
              "Currency",
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12} align="right">
          <Button
            variant="contained"
            color="primary"
            className={classes.formatButton}
          >
            <ListAltIcon className={classes.leftIcon} />
            Sample Format
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
