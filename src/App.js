import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  let name = "Duy dep trai";
  let obj = { name: "tran the duy", phone: "113" };

  return (
    <div className='App'>
      <header className='App-header'>
        <Nav />

        <img src={logo} className='App-logo' alt='logo' />
        <h1>
          Hello world with react {name} {obj.phone}
        </h1>
      </header>
    </div>
  );
}

export default App;
