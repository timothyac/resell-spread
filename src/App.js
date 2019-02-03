import React, { Component } from "react";
import uuid from "uuid";

import "./App.css";
import Nav from "./components/layout/Nav";
import AddItem from "./components/layout/Add-Item";
import MainView from "./components/MainView";

class App extends Component {
  state = {
    items: []
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
      id: uuid.v4(),
      title,
      price: Number(price),
      sold: Number(sale),
      market,
      fees: Number(fees),
      profit
    };

    const items = [...this.state.items];

    items.push(newItem);
    this.setState({ items });

    localStorage.setItem("items", JSON.stringify(items));
  };

  deleteItem = (e, id) => {
    const items = [...this.state.items];

    const updatedItems = items.filter(item => item.id !== id);

    this.setState({ items: updatedItems });

    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  fillStateFromLocalStorage() {
    const list = localStorage.getItem("items");
    const items = JSON.parse(list);
    if (items === null) return;
    this.setState({ items });
  }

  componentDidMount() {
    this.fillStateFromLocalStorage();
  }

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
