export const SET_TASKS = "SET_TASKS";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const INCOMPLETE_TASK = "INCOMPLETE_TASK";
export const RENAME_TASK = "RENAME_TASK";

export function setTasks(items) {
  return {
    type: SET_TASKS,
    items
  };
}

export function addTask(item) {
  return {
    type: ADD_TASK,
    item
  };
}

export function deleteTaskById(id) {
  return {
    type: DELETE_TASK,
    id
  };
}

export function completeTaskById(id) {
  return {
    type: COMPLETE_TASK,
    id
  };
}

export function incompleteTaskById(id) {
  return {
    type: INCOMPLETE_TASK,
    id
  };
}

export function renameTask(id, text) {
  return {
    type: RENAME_TASK,
    id,
    text
  };
}
