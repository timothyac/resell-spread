import React, { Component } from "react";

class Rows extends Component {
  render() {
    const { id, title, price, profit, sold } = this.props.item;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>
          <input type="text" className="form-control" defaultValue={title} />
        </td>
        <td>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <input
              name="price"
              type="text"
              className="form-control"
              defaultValue={price}
              onChange={event => this.props.onChange(event, id)}
            />
          </div>
        </td>
        <td>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">$</div>
            </div>
            <input
              name="sold"
              type="text"
              className="form-control"
              defaultValue={sold}
              onChange={event => this.props.onChange(event, id)}
            />
          </div>
        </td>
        <td>
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
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button
                onClick={event => this.props.dropDown(event, "StockX", id)}
                className="dropdown-item"
              >
                StockX
              </button>
              <button
                onClick={event => this.props.dropDown(event, "Grailed", id)}
                className="dropdown-item"
              >
                Grailed
              </button>
              <button
                onClick={event => this.props.dropDown(event, "Paypal", id)}
                className="dropdown-item"
              >
                Paypal
              </button>
              <button
                onClick={event => this.props.dropDown(event, "Goat", id)}
                className="dropdown-item"
              >
                Goat
              </button>
            </div>
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
      </tr>
    );
  }
}

//id={`dropdown${id}`}

export default Rows;
