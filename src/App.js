import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  let obj = { name: "tran the duy", phone: "113" };
  let [name, setName] = useState("Duyhack");
  const [address, setAdress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "watching hoi dan IT channel",type:'eric' },
    { id: "todo2", title: "reading book",type:'eric' },
    { id: "todo3", title: "Doing homework",type:'hoi dan it' },
    { id: "todo4", title: "Doing homework 2",type:'hoi dan it' },
  ]);

  const handlerEventClick = (event) => {
    if (!address) {
      alert("empty in put");
      return;
    }
    let newTodo = { id: todos.id, title: address ,type:'eric'};
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
     
      <header className='App-header'>
      <Nav />
        <img src={logo} className='App-logo' alt='logo' />
        <h1>
          Hello world with react {name} {obj.phone}
        </h1>
        <Todo todos={todos} title={'all todo'}/>
        <Todo todos={todos.filter(item => item.type === 'eric')} title={'eric todo'}/>
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
