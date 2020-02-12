import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Search from '../SearchBar/SearchBar';
// import Calendar from '../Calendar/Calendar';
import Results from '../Result/Results';
// import Profile from '../Profile/Profile';
import Header from "../Header/Header";

export default function RoutingPage() {
  return (
    <div className="App">
      <Header />
      <main>
        <Search />
        <button clascsName='searchbtn'>Search</button>
      </main>
    </div>
  );
}
