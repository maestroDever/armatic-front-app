import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

export default function RequestTable({ data }) {
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  //keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key.replace("_", " ")}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, name, start_date, end_date, date_requested }) => (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
            <TableCell>{start_date}</TableCell>
            <TableCell>{end_date}</TableCell>
            <TableCell>{date_requested}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
