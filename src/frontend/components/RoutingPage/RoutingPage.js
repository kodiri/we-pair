import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../SearchBar/SearchBar';
// import Calendar from '../Calendar/Calendar';
// import Results from '../Result/Results';
import Header from '../Header/Header';

export default function RoutingPage() {
  return (
    <div className="RoutingPage">
      <main>
        <Search />
        <Link to="/results">
          <button className="searchbtn">Search</button>
        </Link>
      </main>
    </div>
  );
}
