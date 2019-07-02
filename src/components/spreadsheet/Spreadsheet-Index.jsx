import React, { Component } from "react";
import Spreadsheet from "./layout/Spreadsheet";

class MainView extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.items.length === 0 ? (
          <h4 style={headerStyle}>Start by adding your first item above!</h4>
        ) : (
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
        )}
      </React.Fragment>
    );
  }
}

const headerStyle = {
  borderTop: 1,
  borderTopColor: "#F8F9FA",
  borderTopStyle: "solid",
  paddingTop: 9
};

export default MainView;
