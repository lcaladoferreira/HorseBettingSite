import React, { Component } from "react";

export default class Body extends Component {
  render() {
    const childArray = React.Children.toArray(this.props.children);
    var childToDisplay = <></>;
    childArray.forEach(child => {
      if (child.props.title === this.props.pageToDisplay) {
        childToDisplay = child;
      }
    });
    return <div className="pageContent">{childToDisplay}</div>;
  }
}
