import React, { Component } from "react";
import Spreadsheet from "./spreadsheet/Spreadsheet";

class MainView extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="input-group" style={{ marginBottom: 6 }}>
          <div className="input-group-prepend">
            <span className="input-group-text" style={{ width: 35 }} id="">
              #
            </span>
          </div>
          <div className="input-group-prepend">
            <span className="input-group-text" style={{ width: 330 }} id="">
              Title
            </span>
          </div>
          <div className="input-group-append">
            <span className="input-group-text" style={{ width: 328 }} id="">
              Price
            </span>
          </div>
        </div>
        <Spreadsheet items={this.props.items} />
      </React.Fragment>
    );
  }
}

export default MainView;
