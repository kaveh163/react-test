
import React from 'react';
import './App.css';
import Postlist from './components/Postlist';

function App() {
  const user = [
    {id: 1, name: 'kaveh'},
    {id: 2, name: 'ali'},
    {id: 3, name: 'reza'},
 
  ]
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Postlist users={user} />
      
    </div>
  );
}

export default App;
