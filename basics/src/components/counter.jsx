import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">
          +
        </button>
        <button
          disabled={this.props.counter.value <= 0}
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2">-</button>
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
