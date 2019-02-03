import React, { Component } from "react";

class Rows extends Component {
  render() {
    const { id, title, price, profit, sold, market, fees } = this.props.item;
    return (
      <tr>
        <th>
          <div className="input-group mb-2 mr-sm-2">
            <span className="form-control">{title}</span>
          </div>
        </th>
        <td>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <span className="form-control">{price}</span>
          </div>
        </td>
        <td>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <span className="form-control">{sold}</span>
          </div>
        </td>
        <td>
          <div className="input-group mb-2 mr-sm-2">
            <span className="form-control">{market}</span>
          </div>
        </td>
        <td>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <span className="form-control">{fees}</span>
          </div>
        </td>
        <td>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <span className="form-control">{profit}</span>
          </div>
        </td>
        <td>
          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
            onClick={event => this.props.deleteItem(event, id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </td>
      </tr>
    );
  }
}

//id={`dropdown${id}`}

export default Rows;
