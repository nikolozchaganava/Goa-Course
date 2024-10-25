import React from 'react';
import './App.css';
import TurtleList from './components/TurtleList';

function App() {
  return(
    <div className='App'>
      <header>
        <h1>ზღვის კუები</h1>
      </header>
      <main>
        <TurtleList />
      </main>
    </div>
  );
}

export default App;