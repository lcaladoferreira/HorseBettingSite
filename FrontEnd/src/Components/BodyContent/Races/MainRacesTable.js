import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class MainRacesTable extends Component {
  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Race date</th>
            <th>Start time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => this.props.selectedRace(1)}>
            <td>1</td>
            <td>2019-11-01</td>
            <td>17:00</td>
            <td>Sölvesborg</td>
          </tr>
          <tr onClick={() => this.props.selectedRace(2)}>
            <td>2</td>
            <td>2019-11-13</td>
            <td>13:00</td>
            <td>Gråhamn</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
