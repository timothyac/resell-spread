import React, { Component } from "react";
import "./App.css";
import Nav from "./components/layout/Nav";
import AddItem from "./components/layout/Add-Item";
import MainView from "./components/MainView";
import Math from "mathjs";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Phone Case",
        price: 100,
        sold: 180,
        profit: 0
      },
      {
        id: 2,
        title: "Box Logo",
        price: 50,
        sold: 400,
        profit: 0
      },
      {
        id: 3,
        title: "Hoodie",
        price: 150,
        sold: 200,
        profit: 0
      }
    ]
  };

  // Update prices in the state if they are changed
  onChange = (e, id) =>
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item[e.target.name] = e.target.value;
        }
        return item;
      })
    });

  // Change the profit, based on which market the user picked
  dropDown = (e, market, id) => {
    // Grab item from state
    let item = this.state.items.find(item => item.id === id);

    // Define the new profit
    let value =
      market === "StockX"
        ? Math.chain(item.sold)
            .multiply(0.905)
            .subtract(5)
            .done()
            .toFixed(2)
        : market === "Grailed"
        ? Math.chain(item.sold)
            .multiply(0.911)
            .subtract(0.3)
            .done()
            .toFixed(2)
        : market === "Paypal"
        ? Math.chain(item.sold)
            .multiply(0.971)
            .subtract(0.3)
            .done()
            .toFixed(2)
        : market === "Goat"
        ? Math.chain(item.sold)
            .multiply(0.905)
            .subtract(5)
            .done()
            .toFixed(2)
        : 0;

    // Change the state
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.profit = value;
        }
        return item;
      })
    });
  };

  // Add new item to the state
  addItem = (title, price, sale) => {
    const newItem = {
      id: 4,
      title,
      price: Number(price),
      sold: Number(sale),
      profit: 0
    };
    this.setState({ items: [...this.state.items, newItem] });
  };

  render() {
    console.log("oof");
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <h3 className="m-3">Spreadsheet</h3>
          <AddItem addItem={this.addItem} />
          <MainView
            items={this.state.items}
            dropDown={this.dropDown}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
