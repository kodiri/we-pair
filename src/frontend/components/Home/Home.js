import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SearchBar/SearchBar';
import './home.css';
// import Calendar from '../Calendar/Calendar';
// import Results from '../Result/Results';

export default function Home() {
  return (
    <div className="Home">
      <main>
        <div className="search-background">
          <div className="search-title">
            <h2>“Request for </h2>
            <h2>a Pair Programming”</h2>
          </div>
          <Search />
          {/* <Link to="/results">
            <button className="searchbtn">Search</button>
          </Link> */}
        </div>
      </main>
    </div>
  );
}
