import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Grid,
  Button,
  TextField,
  MenuItem,
} from "@material-ui/core";

// styles
import useStyles from "./styles";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget";

export default function ReportPage() {
  var classes = useStyles();
  const [values, setValues] = React.useState({
    period: 1,
    erp: 1,
    cycle: 1,
  });
  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };
  var periods = [
    {
      value: "1",
      label: "Sep 19",
    },
    {
      value: "2",
      label: "Oct 19",
    },
    {
      value: "3",
      label: "Dec 19",
    },
  ];
  var erps = [
    {
      value: 1,
      label: "ERP",
    },
    {
      value: 2,
      label: "Non ERP",
    },
  ];
  var cycles = [
    {
      value: 1,
      label: "Cycle - 1",
    },
    {
      value: 2,
      label: "Cycle -2",
    },
    {
      value: 3,
      label: "Offcycle",
    },
  ];
  // local
  var states = {
    processing: "primary",
    reimbursed: "secondary",
  };
  var data = [
    {
      employee_id: 1,
      employee_name: "Sachin",
      compensation_type: "Bonus",
      amount: 1000,
      currency: "USD",
      status: "Processing",
    },
    {
      employee_id: 2,
      employee_name: "Donald",
      compensation_type: "Commission",
      amount: 200000,
      currency: "INR",
      status: "Reimbursed",
    },
  ];
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());

  return (
    <>
      <PageTitle title="Additions Report" />
      <Grid container spacing={4}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Widget
            title="Period"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <TextField
                select
                label="Period"
                value={values.period}
                className={classes.textField}
                style={{ width: "100%" }}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                onChange={handleChange}
                inputProps={{
                  name: "period",
                  id: "period-simple",
                }}
                helperText="Please select a period"
                margin="normal"
              >
                {periods.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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
              <TextField
                select
                label="ERP/Non ERP"
                value={values.period}
                className={classes.textField}
                style={{ width: "100%" }}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                onChange={handleChange}
                inputProps={{
                  name: "erp",
                  id: "erp-simple",
                }}
                helperText="Please select ERP/Non ERP"
                margin="normal"
              >
                {erps.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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
              <TextField
                select
                label="Cycle"
                value={values.period}
                className={classes.textField}
                style={{ width: "100%" }}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                onChange={handleChange}
                inputProps={{
                  name: "cycle",
                  id: "cycle-simple",
                }}
                helperText="Please select a cycle"
                margin="normal"
              >
                {cycles.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {keys.map(key => (
                    <TableCell key={key}>{key.replace("_", " ")}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(
                  ({
                    employee_id,
                    employee_name,
                    compensation_type,
                    amount,
                    currency,
                    status,
                  }) => (
                    <TableRow key={employee_id}>
                      <TableCell>{employee_id}</TableCell>
                      <TableCell>{employee_name}</TableCell>
                      <TableCell>{compensation_type}</TableCell>
                      <TableCell>{amount}</TableCell>
                      <TableCell>{currency}</TableCell>
                      <TableCell>
                        <Button
                          color={states[status.toLowerCase()]}
                          size="small"
                          className="px-2"
                          variant="contained"
                        >
                          {status}
                        </Button>
                      </TableCell>
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
                <CSVLink data={data} className={classes.csvLink}>
                  Download Report
                </CSVLink>
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
