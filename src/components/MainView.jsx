import React, { Component } from "react";
import Spreadsheet from "./spreadsheet/Spreadsheet";

class MainView extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Initial Price</th>
            <th scope="col">Selling Price</th>
            <th scope="col">Market</th>
            <th scope="col">After-Fees</th>
            <th scope="col">Profit</th>
            <th />
          </tr>
        </thead>
        <Spreadsheet
          items={this.props.items}
          onChange={this.props.onChange}
          deleteItem={this.props.deleteItem}
        />
      </table>
    );
  }
}

export default MainView;
