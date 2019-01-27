import React, { Component } from "react";
import Row from "./Row";

class Spreadsheet extends Component {
  render() {
    return (
      <tbody>
        {this.props.items.map(item => (
          <Row key={item.id} item={item} dropDown={this.props.dropDown} />
        ))}
      </tbody>
    );
  }
}

export default Spreadsheet;
