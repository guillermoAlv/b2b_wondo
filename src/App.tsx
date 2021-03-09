import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGA4React } from "ga-4-react";

function App() {
  const ga = useGA4React();
  console.log(ga);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;