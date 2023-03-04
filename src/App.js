import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  let obj = { name: "tran the duy", phone: "113" };
  let [name, setName] = useState("Duyhack");
  const [address, setAdress] = useState("");
  const handlerEventClick = (event) => {
    setName(address);
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
