import React, { Component } from "react";
import Rows from "./Rows";

class Spreadsheet extends Component {
  render() {
    return this.props.items.map(item => <Rows key={item.id} item={item} />);
  }
}

export default Spreadsheet;
