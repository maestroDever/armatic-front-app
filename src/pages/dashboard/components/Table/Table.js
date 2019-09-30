import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

export default function TableComponent({ data }) {
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
        {data.map(({ id, name }) => (
          <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell className="pl-3 fw-normal">{name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
