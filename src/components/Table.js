import React from "react";
import { Table } from "reactstrap";

export const ResultTable = (props) => {
  const headers = ["#", "Name", "Title", "Salary "]
  console.log(props)
  return <Table>
    <thead>
      <tr>
        <th>#</th>
        {props.results.length ? Object.keys(props.results[0]).map(header => {
          return <th onClick={() => props.onClick(header.toLowerCase())}>{header}</th>
        }) : ""}
      </tr>
    </thead>
    <tbody>
      {props.results ? props.results.map((result, id) => <Row data={result} id={id + 1} />) : ""}
    </tbody>
  </Table>
}

export const Row = (props) => {
  return <tr><td>{props.id}</td><td>{JSON.stringify(props.data.gender)}</td><td>{JSON.stringify(props.data.name.first  + " " + props.data.name.last)}</td></tr>

}