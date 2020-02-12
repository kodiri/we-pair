import React from "react";
import { Link  as Kainy} from "react-router-dom";
import Search from "../SearchBar/SearchBar";
// import Calendar from '../Calendar/Calendar';
import Results from "../Result/Results";
// import Profile from '../Profile/Profile';
import Header from "../Header/Header";

export default function RoutingPage() {
  return (
    <div className="RoutingPage">
      <Header />
      <main>
        <Search />
        <Kainy to="/results">
          <button className="searchbtn">Search</button>
        </Kainy>
      </main>
    </div>
  );
}
