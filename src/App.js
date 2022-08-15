import {useState} from "react"
import './App.css';

function App() {
  const [counter, setCounter]= useState(0)
  return (
    <div className="App">
    <h2>The count is {counter}</h2>
    <button className="addCounter" onClick={() =>{
      setCounter((prev)=> prev+1)
    }}>Add</button>
    <button className="reducerCounter" onClick={() =>{
      setCounter((prev)=> prev-1)
    }}>Reduce</button>
    </div>
  );
}

export default App;
