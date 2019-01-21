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
        price: "$100"
      },
      {
        id: 2,
        title: "Box Logo",
        price: "$50"
      },
      {
        id: 3,
        title: "Hoodie",
        price: "$150"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <h3>Spreadsheet</h3>
          <MainView items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
