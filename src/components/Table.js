import React from "react";
import { Table } from "reactstrap";


export const ResultTable = (props) => {
  const headers = [ "ID","Name", "Time With Company", "Location"]
  console.log(props)
  return <Table>
    <thead>
      <tr>
        
        {/* {props.results.length ? Object.keys(props.results[0]).map(header => {
          return <th onClick={() => props.onClick(header.toLowerCase())}>{header}</th>
        }) : ""} */}
        {props.results.length ? headers.map(header => {
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
return <tr><td>{props.id}</td><td>{JSON.stringify(props.data.name.first + " " + props.data.name.last)}</td><td>{JSON.stringify(props.data.registered.age)}</td><td>{JSON.stringify(props.data.location.city + ", " + props.data.location.country)}</td></tr>

}