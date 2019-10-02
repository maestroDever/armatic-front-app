import React from "react";
import { Grid } from "@material-ui/core";
// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import EmployeeTable from "./components/Table/EmployeeTable";
import RequestTable from "./components/Table/RequestTable";

export default function Dashboard(props) {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="Dashboard" button="Latest Reports" color="secondary" />
      <Grid container spacing={4}>
        <Grid item md={4} sm={6} xs={12}>
          <Widget
            title="Number of Active Employees"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Typography size="xl" weight="medium">
                6
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Widget
            title="Amount Outstanding"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <Typography size="xl" weight="medium">
                AED - 10,000
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Widget
            title="Timelines - Oct 19"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.invoiceText}>
              <Typography color="text" colorBrightness="secondary">
                Cycle-1 Expense Invoice - 10th Oct 19
              </Typography>
            </div>
            <div className={classes.invoiceText}>
              <Typography color="text" colorBrightness="secondary">
                Cycle-2 Expense Invoice - 18th Oct 19
              </Typography>
            </div>
            <div className={classes.invoiceText}>
              <Typography color="text" colorBrightness="secondary">
                Payroll Invoice - 18th Oct 19
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={6}>
          <Widget
            title="Managed Employees"
            upperTitle
            bodyClass={classes.tableWidget}
          >
            <EmployeeTable data={mock.employeeData} />
          </Widget>
        </Grid>
        <Grid item xs={6}>
          <Widget
            title="PTO Requests"
            upperTitle
            bodyClass={classes.tableWidget}
          >
            <RequestTable data={mock.requestData} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
