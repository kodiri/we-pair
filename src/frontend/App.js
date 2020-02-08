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
        <Search search='language'/>
        <Search search='location'/>
        <button className='searchbtn' onClick=''>Search</button>
        <Calendar />
      </main>
    </div>
  );
}

export default App;
