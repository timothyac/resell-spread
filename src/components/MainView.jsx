import React, { Component } from "react";
import Spreadsheet from "./spreadsheet/Spreadsheet";

class MainView extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Initial Price</th>
            <th scope="col">Selling Price</th>
            <th scope="col">Market</th>
            <th scope="col">Profit</th>
          </tr>
        </thead>
        <Spreadsheet items={this.props.items} onChange={this.props.onChange} />
      </table>
    );
  }
}

export default MainView;
