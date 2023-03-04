import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  let name = "Duy dep trai";
  let obj = { name: "tran the duy", phone: "113" };

  const handlerEventClick = (event) => {
    console.log(">>> click me", event.target.value);
  };

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
          value='duy'
          onClick={(event) => handlerEventClick(event)}
        />
        <button type='button' onClick={(event) => handlerEventClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
