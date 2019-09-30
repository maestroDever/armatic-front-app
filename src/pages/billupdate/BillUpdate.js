import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";

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
  return (
    <>
      <PageTitle title="Month - Sep 19" />
      <Grid container spacing={4}>
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
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
}
