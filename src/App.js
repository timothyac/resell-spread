import React, { Component } from "react";
import "./App.css";
import Nav from "./components/layout/Nav";
import MainView from "./components/MainView";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Phone Case",
        price: "$100",
        profit: "$0"
      },
      {
        id: 2,
        title: "Box Logo",
        price: "$50",
        profit: "$0"
      },
      {
        id: 3,
        title: "Hoodie",
        price: "$150",
        profit: "$0"
      }
    ]
  };

  dropDown = (e, market, id) => {
    console.log(market, id);
    let value =
      market === "StockX"
        ? "$100"
        : market === "Grailed"
        ? "$75"
        : market === "Paypal"
        ? "$50"
        : market === "Goat"
        ? "$25"
        : 0;

    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.profit = value;
        }
        return item;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <h3>Spreadsheet</h3>
          <MainView items={this.state.items} dropDown={this.dropDown} />
        </div>
      </div>
    );
  }
}

export default App;
