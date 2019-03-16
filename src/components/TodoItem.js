import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    let { text } = this.props;

    return (
      <li className="list-group-item">
        <div className="checkbox">{text}</div>
      </li>
    );
  }
}

export default TodoItem;
