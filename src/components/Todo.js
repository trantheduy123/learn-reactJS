

import React from "react";

const Todo = (props) => {
  const { todos, title } = props; // Destructure props to get todos and title

  const handlerDelete = (id) => {
    alert(id);
  };

  return (
    <div className="todos-container">
      <div className="title">{title}</div>

      {todos.map((todo) => (
        <div key={todo.id}>
          <li className="todo-list">
            {todo.text} {/* Display the todo text from the todo object */}
            <span onClick={() => handlerDelete(todo.id)}>x {todo.title}</span>
          </li>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default Todo;