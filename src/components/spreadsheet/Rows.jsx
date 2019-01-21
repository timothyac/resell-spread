import React, { Component } from "react";

class Rows extends Component {
  render() {
    return (
      <div className="input-group" style={{ marginBottom: 6 }}>
        <div className="input-group-prepend">
          <span className="input-group-text" style={{ width: 35 }} id="">
            {this.props.item.id}
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          defaultValue={this.props.item.title}
        />
        <input
          type="text"
          className="form-control"
          defaultValue={this.props.item.price}
        />
      </div>
    );
  }
}

export default Rows;
