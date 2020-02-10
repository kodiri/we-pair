import React from 'react';
import Header from './Header';
import Search from './components/SearchBar/SearchBar';
import Calendar from './components/Calendar/Calendar';
import Results from './components/Result/Results';
import Profile from './components/Profile/Profile';
import './App.css';

export default function App() {
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