import React from "react";
// import { Link } from 'react-router-dom';

import "./home.css";
import SearchBar from "../SearchBar/SearchBar";
// import Calendar from '../Calendar/Calendar';
// import Results from '../Result/Results';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = { filteredUsers: "", filteredLocation: "" };
  }

  render() {
    return (
      <div className="Home">
        <main>
          <div className="search-background">
            <div className="search-title">
              <h1>Start</h1>
              <p>Find a user</p>
              <p>Request a pair Programming</p>
            </div>

            <SearchBar
              searchData={(
                filteredUsers,
                filteredLocation,
                languageSearchQuery,
                locationSearchQuery
              ) =>
                this.props.searchData(   
                  filteredUsers,
                  filteredLocation,
                  languageSearchQuery,
                  locationSearchQuery
                )
              }
              filteredUsers={this.state.filteredUsers}
              filteredLocation={this.state.filteredLocation}
            />
          </div>
        </main>
      </div>
    );
  }
}
