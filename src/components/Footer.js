import React, { Component } from "react";

import { connect } from "react-redux";
import { completeIncompleted, deleteCompleted } from "../actions";
import TodoService from "./TodoService";

class Footer extends Component {
  handleCompleteFiltered(filter) {
    if (filter !== "completed") {
      this.props.tasks.forEach(item => {
        if (!item.completed) TodoService.completeTodoItem(item.id);
      });
      this.props.completeIncompleted();
    }
  }

  handleDeleteCompleted() {
    this.props.tasks.forEach(item => {
      if (item.completed) TodoService.deleteTodoItem(item.id);
    });
    this.props.deleteCompleted();
  }

  render() {
    const filter = this.props.filter;
    const totalCount = this.props.tasks.length;

    let completedCount = 0;
    this.props.tasks.map(item => (item.completed ? completedCount++ : null));

    return (
      <div className="card-footer">
        <strong>{totalCount}</strong>
        {" in total & "}
        <strong>{completedCount}</strong>
        {" completed."}

        <div className="right-button">
          <span
            className="clickable"
            onClick={() => this.handleCompleteFiltered(filter)}
          >
            Complete Visible{" "}
            <span role="img" aria-label="Delete All">
              &#128065;
            </span>
          </span>
          {"  "}
          <span
            className="clickable"
            onClick={() => this.handleDeleteCompleted()}
          >
            Delete Completed{" "}
            <span role="img" aria-label="Delete All">
              &#9940;
            </span>
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { completeIncompleted, deleteCompleted }
)(Footer);
