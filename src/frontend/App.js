import React from 'react';
import Header from './Header';
import Search from './Search';
import Calendar from './Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Search search='language'/>
        <Search search='location'/>
        <button className='searchbtn'>Search</button>
        <Calendar />
      </body>
    </div>
  );
}

export default App;
