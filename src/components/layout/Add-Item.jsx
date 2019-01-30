import React, { Component } from "react";
import Math from "mathjs";

class AddItem extends Component {
  state = {
    title: "",
    price: "",
    sold: "",
    market: ""
  };

  // Create new item, and reset paramters
  onSubmit = e => {
    e.preventDefault();

    if (
      this.state.title === "" ||
      this.state.price === "" ||
      this.state.sold === "" ||
      this.state.market === ""
    )
      return;

    let profit = produceProfit(this.state.market, this.state.sold);

    this.props.addItem(
      this.state.title,
      this.state.price,
      this.state.sold,
      this.state.market,
      profit
    );
    this.setState({ title: "", price: "", sold: "", market: "" });
  };

  // Update state when anything is typed
  onChange = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-row ml-4 mb-2">
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
          />
        </div>
        <div className="form-group col-md-2">
          <input
            type="number"
            name="sold"
            className="form-control"
            placeholder="Sale Price"
            value={this.state.sold}
            onChange={this.onChange}
          />
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Marketplace
          </button>
          <div
            className="dropdown-menu form-group col-md-2"
            aria-labelledby="dropdownMenuButton"
          >
            <button
              name="market"
              onClick={this.onChange}
              className="dropdown-item"
              value="stockx"
            >
              StockX
            </button>
            <button
              name="market"
              onClick={this.onChange}
              className="dropdown-item"
              value="grailed"
            >
              Grailed
            </button>
            <button
              name="market"
              onClick={this.onChange}
              className="dropdown-item"
              value="paypal"
            >
              Paypal
            </button>
            <button
              name="market"
              onClick={this.onChange}
              className="dropdown-item"
              value="goat"
            >
              Goat
            </button>
          </div>
        </div>
        <div className="form-group col-md-1">
          <input type="submit" value="Add" className="btn btn-primary" />
        </div>
      </form>
    );
  }
}

function produceProfit(market, soldPrice) {
  let value =
    market === "stockx"
      ? Math.chain(soldPrice)
          .multiply(0.905)
          .subtract(5)
          .done()
          .toFixed(2)
      : market === "grailed"
      ? Math.chain(soldPrice)
          .multiply(0.911)
          .subtract(0.3)
          .done()
          .toFixed(2)
      : market === "paypal"
      ? Math.chain(soldPrice)
          .multiply(0.971)
          .subtract(0.3)
          .done()
          .toFixed(2)
      : market === "goat"
      ? Math.chain(soldPrice)
          .multiply(0.905)
          .subtract(5)
          .done()
          .toFixed(2)
      : 0;

  return value;
}

export default AddItem;
