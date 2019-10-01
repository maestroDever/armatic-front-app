import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

// styles
import useStyles from "./styles";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget";

export default function ReportPage() {
  var classes = useStyles();

  // local
  var data = [
    {
      employee_id: 1,
      employee_name: "Sachin",
      compensation_type: "Bonus",
      amount: 1000,
      currency: "USD",
    },
    {
      employee_id: 2,
      employee_name: "Donald",
      compensation_type: "Commission",
      amount: 200000,
      currency: "INR",
    },
  ];
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());

  return (
    <>
      <PageTitle title="Reports" />
      <Grid container spacing={4}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget
            title="Period"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Typography size="xl" weight="medium">
                Sep, 19 - Oct, 19
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget
            title="ERP/Non ERP"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Typography size="xl" weight="medium">
                Non ERP
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget
            title="Cycle"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Typography size="xl" weight="medium">
                Cycle - 1, Cycle - 2, Offcycle
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                {keys.map(key => (
                  <TableCell key={key}>{key.replace("_", " ")}</TableCell>
                ))}
              </TableHead>
              <TableBody>
                {data.map(
                  ({
                    employee_id,
                    employee_name,
                    compensation_type,
                    amount,
                    currency,
                  }) => (
                    <TableRow key={employee_id}>
                      <TableCell>{employee_id}</TableCell>
                      <TableCell>{employee_name}</TableCell>
                      <TableCell>{compensation_type}</TableCell>
                      <TableCell>{amount}</TableCell>
                      <TableCell>{currency}</TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
            <div align="right">
              <Button
                variant="contained"
                color="primary"
                className={classes.downloadButton}
              >
                <CloudDownloadIcon className={classes.leftIcon} />
                Download Report
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
