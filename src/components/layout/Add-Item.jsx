import React, { Component } from "react";

class AddItem extends Component {
  state = {
    title: "",
    price: "",
    sold: ""
  };

  // Create new item, and reset paramters
  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.title, this.state.price, this.state.sold);
    this.setState({ title: "", price: "", sold: "" });
  };

  // Update state when anything is typed
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-row ml-4 mb-2">
        <div className="form-group col-md-6">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Item Name"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group col-md-2">
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Item Price"
            value={this.state.price}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group col-md-2">
          <input
            type="number"
            name="sold"
            className="form-control"
            placeholder="Sale Price"
            value={this.state.sold}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group col-md-2">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    );
  }
}

export default AddItem;
