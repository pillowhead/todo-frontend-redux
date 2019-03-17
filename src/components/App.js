import React from "react";
import TodoList from "./TodoList";
import "../style/index.css";

function App() {
  let title = "ToDo list";

  return (
    <div>
      <TodoList title={title} />
    </div>
  );
}

export default App;
