import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import uuid from "uuid";

import "./App.css";
import Nav from "./components/app-layout/Nav";
import Footer from "./components/app-layout/Footer";
import AddItem from "./components/app-layout/Add-Item";
import MainView from "./components/spreadsheet/Spreadsheet-Index";
import About from "./components/About";
import Calculator from "./components/Calculator";

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
      <Router>
        <div className="App">
          <Nav />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <div className="container">
                  <h3 className="m-3">Spreadsheet</h3>
                  <AddItem addItem={this.addItem} />
                  <MainView
                    items={this.state.items}
                    onChange={this.onChange}
                    deleteItem={this.deleteItem}
                  />
                </div>
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/calculator" component={Calculator} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
