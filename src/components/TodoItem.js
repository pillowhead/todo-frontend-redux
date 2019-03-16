import React, { Component } from "react";
import TodoService from "./TodoService";
import { connect } from "react-redux";
import {
  deleteTaskById,
  completeTaskById,
  incompleteTaskById
} from "../actions";

class TodoItem extends Component {
  handleDelete(id) {
    this.props.deleteTaskById(id);
    TodoService.deleteTodoItem(id);
  }

  handleComplete(id) {
    this.props.completeTaskById(id);
    TodoService.completeTodoItem(id);
  }

  handleIncomplete(id) {
    this.props.incompleteTaskById(id);
    TodoService.incompleteTodoItem(id);
  }

  render() {
    let { item } = this.props;

    return (
      <li className="list-group-item">
        <div>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() =>
              item.completed
                ? this.handleIncomplete(item.id)
                : this.handleComplete(item.id)
            }
          />

          {item.text}
          <div className="right-button">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => this.handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { deleteTaskById, completeTaskById, incompleteTaskById }
)(TodoItem);
