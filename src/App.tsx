import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/hello/Hello';
import { Hello } from './components/hello/Hello';
import { Hi } from './components/hi/Hi';

const App: React.FC = () => {
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
      <Hello title="hello title"/>
      <br/>
      <br/>
      <Hi title="hi title"/>
    </div>
  );
}

export default App;
