import React, { Component } from "react";

class Rows extends Component {
  render() {
    const { id, title, price, profit, sold, market } = this.props.item;
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
            <span className="form-control">{profit}</span>
          </div>
        </td>
      </tr>
    );
  }
}

//id={`dropdown${id}`}

export default Rows;
