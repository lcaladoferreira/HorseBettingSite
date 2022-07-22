import React, { Component } from "react";

import Header from "./Header";
import Body from "./Body";
import Home from "./../BodyContent/Home";
import Races from "../BodyContent/Races/Races";
import Registration from "./../BodyContent/Registration";
import Profile from "./../BodyContent/Profile";

const pages = [
  { title: "Races", identifier: "Races" },
  { title: "Registration", identifier: "Registration" },
  { title: "Profile", identifier: "Profile" }
];

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { pageToDisplay: "Home" };
  }
  render() {
    return (
      <div>
        <Header
          menuItems={pages}
          onChange={pageTitle => this.setState({ pageToDisplay: pageTitle })}
        />
        <Body pageToDisplay={this.state.pageToDisplay}>
          <Home title="Home" />
          <Races title="Races" />
          <Registration title="Registration" />
          <Profile title="Profile" />
        </Body>
      </div>
    );
  }
}
