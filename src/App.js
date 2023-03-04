import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  let obj = { name: "tran the duy", phone: "113" };
  let [name, setName] = useState("Duyhack");
  const [address, setAdress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "watching hoi dan IT channel" },
    { id: "todo2", title: "Doing homework" },
  ]);

  const handlerEventClick = (event) => {
    if (!address) {
      alert("empty in put");
      return;
    }
    let newTodo = { id: todos.id, title: address };
    setTodos([...todos, newTodo]);
    setAdress("");
  };

  const handlerOnchangeInput = (e) => {
    console.log(address);
    setAdress(e.target.value);
  };

  //re-render
  return (
    <div className='App'>
      <Nav />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
          Hello world with react {name} {obj.phone}
        </h1>
        <div className='todos-container'>
          {todos.map((todo) => {
            return (
              <li className='todo-list' key={todo.id}>
                {" "}
                {todo.title}
              </li>
            );
          })}
        </div>
        <input
          type='text'
          value={address}
          onChange={(e) => handlerOnchangeInput(e)}
        />
        <button type='button' onClick={(event) => handlerEventClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
