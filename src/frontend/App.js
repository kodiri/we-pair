import React from 'react';
import Header from './Header';
import Search from './components/SearchBar/SearchBar';
import Calendar from './Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Search />
        <Calendar />
    </div>
  );
}

export default App;
