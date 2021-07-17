import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 p-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  //
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
