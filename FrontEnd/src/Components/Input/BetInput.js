import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default class BetInput extends Component {
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Bet as winner</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Horse</Form.Label>
            <Form.Control
              as="select"
              value={this.props.selectedHorse}
              onChange={event =>
                this.props.onChangeSelectedHorse(event.target.value)
              }
            >
              <option>Choose...</option>
              <option value="1">1. Lucky Charm</option>
              <option value="2">2. Ginger Roadster</option>
              <option value="3">3. Blue Star</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Winnings</Form.Label>
            <Form.Control disabled />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Make Bet
        </Button>
      </Form>
    );
  }
}
