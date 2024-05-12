
import React from 'react';
import './App.css';
import Postlist from './components/Postlist';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Postlist id = "1" name = "kaveh"/>
      <Postlist id = "2" name = "ali"/>
      <Postlist id = "3" name = "reza"/>
    </div>
  );
}

export default App;
