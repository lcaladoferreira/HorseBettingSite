import React, { Component } from "react";

import MainRacesTable from "./MainRacesTable";
import SpecificRaceTable from "./SpecificRaceTable";

export default class Races extends Component {
  constructor(props) {
    super(props);
    this.state = { displayRaceTable: false, selectedRace: 0 };
  }
  render() {
    return (
      <>
        <MainRacesTable
          selectedRace={id =>
            this.setState({ displayRaceTable: true, selectedRace: id })
          }
        />
        {this.state.displayRaceTable ? (
          <SpecificRaceTable raceToShow={this.state.selectedRace} />
        ) : (
          <></>
        )}
      </>
    );
  }
}
