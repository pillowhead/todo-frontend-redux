import { combineReducers } from "redux";
import {
  SET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  INCOMPLETE_TASK,
  RENAME_TASK
} from "../actions";
//import TodoService from "../components/TodoService";

function tasks(state = [], action) {
  let tasks = [];

  switch (action.type) {
    case SET_TASKS:
      return action.items;

    case ADD_TASK:
      tasks = [action.item, ...state];
      return tasks;

    case DELETE_TASK:
      tasks = state.filter(item => item.id !== action.id);
      return tasks;

    case COMPLETE_TASK:
      tasks = state.map(item => {
        if (item.id === action.id) {
          item.completed = true;
        }
        return item;
      });
      return tasks;

    case INCOMPLETE_TASK:
      tasks = state.map(item => {
        if (item.id === action.id) {
          item.completed = false;
        }
        return item;
      });
      return tasks;

    case RENAME_TASK:
      tasks = state.map(item => {
        if (item.id === action.id) {
          item.text = action.text;
        }
        return item;
      });
      return tasks;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ tasks });

export default rootReducer;
