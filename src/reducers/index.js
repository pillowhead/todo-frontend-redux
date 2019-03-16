import { combineReducers } from "redux";
import { SET_TASKS, ADD_TASK } from "../actions";
//import TodoService from "../components/TodoService";

function tasks(state = [], action) {
  switch (action.type) {
    case SET_TASKS:
      return action.items;

    case ADD_TASK:
      let tasks = [action.item, ...state];
      return tasks;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ tasks });

export default rootReducer;
