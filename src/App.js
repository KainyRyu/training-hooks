import React from 'react';
import Hooks1 from './components/Hooks1'
import Hooks2 from './components/Hooks2';
import Fetching from './components/Fetching'
import './App.css';

function App() {
  return (
    <div className="App">
      <Hooks1 />
      <Hooks2 />
      <Fetching />
    </div>
  );
}

export default App;
