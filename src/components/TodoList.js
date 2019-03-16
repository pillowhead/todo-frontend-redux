import React, { Component } from "react";
import TodoItem from "./TodoItem";
import InputForm from "./InputForm";
import TodoService from "./TodoService";
import { connect } from "react-redux";
import { setTasks } from "../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "all"
    };
  }

  componentWillMount() {
    this.load();
  }

  load() {
    TodoService.getTodoList(this.state.filter).then(response =>
      this.props.setTasks(response.data)
    );
  }

  render() {
    const title = this.props.title;
    const addNewMessage = "Add new task...";

    return (
      <div className="todolist">
        <h1>{title}</h1>

        <InputForm message={addNewMessage} option="new" />

        <div>
          <ul className="list-group">
            {this.props.tasks.map(item => {
              return <TodoItem key={item.id} item={item} />;
            })}
          </ul>
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
  { setTasks }
)(TodoList);
