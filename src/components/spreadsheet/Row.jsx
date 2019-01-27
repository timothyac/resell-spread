import React, { Component } from "react";

class Rows extends Component {
  state = {
    profit: "$0"
  };

  render() {
    const { id, title, price, profit } = this.props.item;
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>
          {" "}
          <input type="text" className="form-control" defaultValue={title} />
        </td>
        <td>
          <input type="text" className="form-control" defaultValue={price} />
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
          <span type="text" className="form-control" id={`dropdown${id}`}>
            {profit}
          </span>
        </td>
      </tr>
    );
  }
}

export default Rows;
