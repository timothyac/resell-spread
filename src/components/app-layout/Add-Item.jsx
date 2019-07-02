import React, { Component } from "react";
import Math from "mathjs";

import ReactTooltip from "react-tooltip";

class AddItem extends Component {
  state = {
    title: "",
    price: "",
    sold: "",
    market: "",
    shipping: ""
  };

  // Create new item, and reset paramters
  onSubmit = e => {
    e.preventDefault();

    if (
      this.state.title === "" ||
      this.state.price === "" ||
      this.state.sold === "" ||
      this.state.market === "" ||
      this.state.shipping === ""
    )
      return;

    let fees = produceFees(
      this.state.market,
      this.state.shipping,
      this.state.sold
    );
    let profit = produceProfit(fees, this.state.price);

    this.props.addItem(
      this.state.title,
      this.state.price,
      this.state.sold,
      this.state.market,
      fees,
      profit
    );
    this.setState({ title: "", price: "", sold: "", market: "", shipping: "" });
  };

  // Update state when anything is typed
  onChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  // Update Dropdown
  newMarket = e => {
    if (this.state.market === "") {
      return "Marketplace";
    } else {
      return this.state.market;
    }
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="mb-2">
          <div className="form-row justify-content-md-center">
            <div className="form-group col-md-5">
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Item Name"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-2">
              <input
                type="number"
                name="price"
                className="form-control"
                placeholder="Item Price"
                value={this.state.price}
                onChange={this.onChange}
                data-tip="Price you bought it at"
              />
            </div>
          </div>
          <div className="form-row justify-content-md-center">
            <div className="form-group col-md-2">
              <input
                type="number"
                name="sold"
                className="form-control"
                placeholder="Sale Price"
                value={this.state.sold}
                onChange={this.onChange}
                data-tip="Price you sold it at"
              />
            </div>
            <div className="form-group col-md-2">
              <input
                type="number"
                name="shipping"
                className="form-control"
                placeholder="Shipping/Fees"
                value={this.state.shipping}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group dropdown col-md-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {this.newMarket()}
              </button>
              <div
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton"
              >
                <button
                  name="market"
                  onClick={this.onChange}
                  className="dropdown-item"
                  value="StockX"
                >
                  StockX
                </button>
                <button
                  name="market"
                  onClick={this.onChange}
                  className="dropdown-item"
                  value="Grailed"
                >
                  Grailed
                </button>
                <button
                  name="market"
                  onClick={this.onChange}
                  className="dropdown-item"
                  value="Paypal"
                >
                  Paypal
                </button>
                <button
                  name="market"
                  onClick={this.onChange}
                  className="dropdown-item"
                  value="Goat"
                >
                  Goat
                </button>
              </div>
            </div>
            <div className="form-group col-md-1">
              <input type="submit" value="Add" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <ReactTooltip effect="solid" />
      </div>
    );
  }
}

// Takes in shipping, grabs the right market rate, and then produces the postFees number
function produceFees(market, preShipping, soldPrice) {
  let shipping;

  if (preShipping === "" || preShipping === 0) {
    shipping = 0;
  } else {
    shipping = preShipping;
  }

  let value =
    market === "StockX"
      ? Math.chain(soldPrice)
          .multiply(0.905)
          .subtract(5)
          .subtract(shipping)
          .done()
          .toFixed(2)
      : market === "Grailed"
      ? Math.chain(soldPrice)
          .multiply(0.911)
          .subtract(0.3)
          .subtract(shipping)
          .done()
          .toFixed(2)
      : market === "Paypal"
      ? Math.chain(soldPrice)
          .multiply(0.971)
          .subtract(0.3)
          .subtract(shipping)
          .done()
          .toFixed(2)
      : market === "Goat"
      ? Math.chain(soldPrice)
          .multiply(0.905)
          .subtract(5)
          .subtract(shipping)
          .done()
          .toFixed(2)
      : 0;

  return value;
}

// Takes in the postFees number, and produces the actual profit
function produceProfit(afterFees, initialPrice) {
  let value = Math.chain(afterFees)
    .subtract(initialPrice)
    .done()
    .toFixed(2);

  return value;
}

export default AddItem;
