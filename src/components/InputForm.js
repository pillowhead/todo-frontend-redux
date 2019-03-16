import React, { Component } from "react";
import KeyCode from "keycode-js";
import { connect } from "react-redux";
import { addTask } from "../actions";
import TodoService from "./TodoService";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  clear() {
    this.setState({ value: "" });
  }

  handleKeyUp(e) {
    const text = this.state.value.trim();

    if (this.props.option === "new") {
      if (e.keyCode === KeyCode.KEY_RETURN && text) {
        TodoService.createTodoItem(text).then(res =>
          this.props.addTask(res.data)
        );
        this.clear();
      }
    }
  }

  render() {
    const message = this.props.message;

    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onKeyUp={this.handleKeyUp.bind(this)}
          onChange={this.handleChange.bind(this)}
          placeholder={message}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(InputForm);
