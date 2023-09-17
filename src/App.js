import logo from './logo.svg';
import './App.css';
import React from 'react';
import MinhaImagem from './images/melo_entocado.png'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MinhaImagem} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Anna is here
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
