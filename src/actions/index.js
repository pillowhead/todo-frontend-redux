export const SET_TASKS = "SET_TASKS";
export const ADD_TASK = "ADD_TASK";
// export const DELETE_TASK = "COMPLETE_TASK";

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

// export function deleteTaskById(id) {
//   return {
//     type: DELETE_TASK,
//     id
//   };
// }
