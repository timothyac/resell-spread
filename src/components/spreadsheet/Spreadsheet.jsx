import React, { Component } from "react";
import Subtotal from "./Subtotal";
import Row from "./Row";

class Spreadsheet extends Component {
  render() {
    return (
      <tbody>
        {this.props.items.map(item => (
          <Row key={item.id} item={item} onChange={this.props.onChange} />
        ))}
        <Subtotal subProfit={this.props.items} />
      </tbody>
    );
  }
}

export default Spreadsheet;
