import React, { Component } from "react";
import TodoService from "./TodoService";
import InputForm from "./InputForm";
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
    let { item, renameId, updateRenameId } = this.props;
    const handleRename = () => updateRenameId(item.id);

    const renameCode =
      item.id === renameId ? (
        <InputForm
          option="rename"
          message="Rename to..."
          id={item.id}
          renameId={renameId}
          updateRenameId={updateRenameId}
        />
      ) : null;

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
          />{" "}
          {item.text}
          <div className="right-button">
            {/* Rename Button */}
            <span
              role="img"
              className="clickable"
              onClick={handleRename}
              aria-label="Rename"
            >
              &#9999;
            </span>{" "}
            {/* Delete Button */}
            <span
              role="img"
              className="clickable"
              onClick={() => this.handleDelete(item.id)}
              aria-label="Delete"
            >
              &#9940;
            </span>
          </div>
          <div>{renameCode}</div>
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
