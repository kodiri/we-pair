import React from 'react';
import Header from './Header';
import Search from './components/SearchBar/SearchBar';
import Calendar from './Calendar';
import Results from './Results';
import Profile from './Profile';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Search />
        <button className='searchbtn'>Search</button>
        <Calendar />
      </body>
    </div>
  );
}