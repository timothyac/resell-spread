import React, { Component } from "react";
import "./App.css";
import Nav from "./components/layout/Nav";
import AddItem from "./components/layout/Add-Item";
import MainView from "./components/MainView";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Phone Case",
        price: 100,
        sold: 180,
        market: "paypal",
        fees: 174.48,
        profit: 74.48
      },
      {
        id: 2,
        title: "Box Logo",
        price: 50,
        sold: 400,
        market: "stockx",
        fees: 357,
        profit: 307
      },
      {
        id: 3,
        title: "Hoodie",
        price: 150,
        sold: 200,
        market: "grailed",
        fees: 181.9,
        profit: 31.9
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

  // Add new item to the state
  addItem = (title, price, sale, market, fees, profit) => {
    const newItem = {
      id: this.state.items.length + 1,
      title,
      price: Number(price),
      sold: Number(sale),
      market,
      fees: Number(fees),
      profit
    };
    this.setState({ items: [...this.state.items, newItem] });
  };

  deleteItem = (e, id) => {
    console.log("oof", id);
    this.setState({
      items: [...this.state.items.filter(item => item.id !== id)]
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <h3 className="m-3">Spreadsheet</h3>
          <AddItem addItem={this.addItem} />
          <MainView
            items={this.state.items}
            onChange={this.onChange}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
