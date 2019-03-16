import axios from "axios";

const TodoService = {
  getTodoList(filter) {
    switch (filter) {
      case "completed":
        return axios.get("http://localhost:8080/todos/completed");

      case "active":
        return axios.get("http://localhost:8080/todos/incompleted");

      default:
        return axios.get("http://localhost:8080/todos");
    }
  },

  createTodoItem(text) {
    let data = { text: text };
    return axios.post("http://localhost:8080/todos", data); //  body `{"text":"..."}`
  },

  updateTodoItem(id, data) {
    return axios.post("http://localhost:8080/todos/" + id, data);
  },

  deleteTodoItem(id) {
    return axios.delete("http://localhost:8080/todos/" + id);
  },

  completeTodoItem(id) {
    return axios.post("http://localhost:8080/todos/" + id + "/complete");
  },

  incompleteTodoItem(id) {
    return axios.post("http://localhost:8080/todos/" + id + "/incomplete");
  }
};

export default TodoService;
