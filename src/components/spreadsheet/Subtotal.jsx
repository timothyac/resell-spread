import React, { Component } from "react";
import Math from "mathjs";

class Subtotal extends Component {
  // Totals up Inital Prices per Item
  subInitial = () => {
    let aNum = 0;
    this.props.subProfit.forEach(item => (aNum += Number(item.price)));
    return aNum;
  };

  // Totals up Selling Prices per Item
  subSold = () => {
    let aNum = 0;
    this.props.subProfit.forEach(item => (aNum += Number(item.sold)));
    return aNum;
  };

  // Totals up Profits per Item
  subProfit = () => {
    let aNum = 0;
    this.props.subProfit.forEach(
      item =>
        (aNum += Number(
          Math.chain(Number(item.profit))
            .done()
            .toFixed(2)
        ))
    );
    return aNum;
  };

  render() {
    return (
      <tr>
        <th />
        <td />
        <td>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <span className="form-control">{this.subInitial()}</span>
          </div>
        </td>
        <td>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <span className="form-control">{this.subSold()}</span>
          </div>
        </td>
        <td />

        <td>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <span className="form-control">{this.subProfit()}</span>
          </div>
        </td>
      </tr>
    );
  }
}

export default Subtotal;
