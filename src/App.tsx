import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Radix } from "./Radix";


function App() {

  new Radix([5,3,88,235,65,23,4632,234]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Quick Sort in TypeScript... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
