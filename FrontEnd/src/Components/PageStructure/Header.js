import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand
            href=""
            style={{ cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              this.props.onChange("Home");
            }}
          >
            Horse Betting
          </Navbar.Brand>
          <Nav
            className="mr-auto"
            activeKey="Home"
            onSelect={eventKey => this.props.onChange(eventKey)}
          >
            {this.props.menuItems.map(item => (
              <Nav.Link key={item.identifier} eventKey={item.identifier}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
      </>
    );
  }
}
