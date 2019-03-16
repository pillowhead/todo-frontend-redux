import React from "react";
import TodoList from "./TodoList";
import "../style/index.css";

function App() {
  let title = "ToDo list";

  return (
    <div className="container">
      <div className="row">
        <TodoList title={title} />
      </div>
    </div>
  );
}

export default App;
