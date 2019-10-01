import React from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Paper,
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker } from "@material-ui/pickers";
// styles
import useStyles from "./styles";

// components
import { Typography } from "../../components/Wrappers";

export default function BillFormsPage() {
  var classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54"),
  );
  const [currency, setCurrency] = React.useState("");

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const currencies = [
    {
      value: "USD",
      label: "$ (USD)",
    },
    {
      value: "EUR",
      label: "€ (EUR)",
    },
    {
      value: "BTC",
      label: "฿ (BTC)",
    },
    {
      value: "JPY",
      label: "¥ (JPY)",
    },
  ];

  const data = [
    {
      employee_id: 101,
      employee_name: "Marcus",
      item: "Salary",
      amount: 200000,
    },
    {
      employee_id: 102,
      employee_name: "Marcus",
      item: "Off Cycle Bonus",
      amount: 12000,
    },
    {
      employee_id: 103,
      employee_name: "Marcus",
      item: "PEO Fees",
      amount: 1000,
    },
  ];
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  var summary = data.reduce((a, b) => a + b.amount, 0);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={12}>
        <Paper className={classes.paper}>
          <form noValidate>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={12} md={8}>
                <div className={classes.title}>
                  <Typography
                    color="text"
                    variant="h3"
                    component="h4"
                    colorBrightness="secondary"
                  >
                    Velocity
                  </Typography>
                </div>
                <div className={classes.text}>
                  <Typography color="text" colorBrightness="secondary">
                    Flat No 401
                  </Typography>
                </div>
                <div className={classes.text}>
                  <Typography color="text" colorBrightness="secondary">
                    Dubai, dubai, 5300002
                  </Typography>
                </div>
                <div className={classes.text}>
                  <Typography color="text" colorBrightness="secondary">
                    United Arab Emirate
                  </Typography>
                </div>
                <div className={classes.text}>
                  <TextField
                    id="vendor"
                    label="Vendor"
                    className={classes.textField}
                    style={{ width: "60%" }}
                    placeholder="Vendor description"
                    margin="normal"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <div align="right">
                    <Button variant="contained">Save</Button>
                  </div>
                  <div>
                    <TextField
                      id="bill_no"
                      label="Bill #"
                      fullWidth
                      className={classes.textField}
                      margin="normal"
                    />
                  </div>
                  <div>
                    <TextField
                      id="bill_reference"
                      label="Reference #"
                      className={classes.textField}
                      fullWidth
                      margin="normal"
                    />
                  </div>
                  <div spacing={4}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      className={classes.textField}
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="bill_date"
                      label="Date"
                      style={{ paddingRight: "10px", width: "50%" }}
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />

                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      className={classes.textField}
                      format="MM/dd/yyyy"
                      margin="normal"
                      style={{ paddingLeft: "10px", width: "50%" }}
                      id="bill_duedate"
                      label="Due Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="bill_currency"
                      select
                      label="Select"
                      value={currency}
                      className={classes.textField}
                      style={{ width: "100%" }}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      onChange={handleChange}
                      helperText="Please select your currency"
                      margin="normal"
                    >
                      {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper className={classes.paper}>
          <Table className="mb-0">
            <TableHead>
              <TableRow>
                {keys.map(key => (
                  <TableCell key={key}>{key.replace("_", " ")}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(({ employee_id, employee_name, item, amount }) => (
                <TableRow key={employee_id}>
                  <TableCell>{employee_id}</TableCell>
                  <TableCell className="pl-3 fw-normal">
                    {employee_name}
                  </TableCell>
                  <TableCell>{item}</TableCell>
                  <TableCell>{amount}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2}></TableCell>
                <TableCell className={classes.boldSummary}>
                  Total Amount
                </TableCell>
                <TableCell className={classes.boldSummary}>{summary}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div align="right">
            <Button
              variant="contained"
              color="primary"
              className={classes.uploadButton}
            >
              <CloudUploadIcon className={classes.leftIcon} />
              Upload Invoice
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
