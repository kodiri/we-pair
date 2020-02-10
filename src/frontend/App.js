import React from 'react';
import Header from './Header';
import Search from './Search';
import Calendar from './Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Search />
        <button className='searchbtn'>Search</button>
        <Calendar />
      </main>
    </div>
  );
}

export default App;
