import React from "react";
import "./SearchBar.css";
// import { Link } from "react-router-dom";
import SearchResults from "../Results/SearchResults";
import users from "../getUsers"

import { Redirect } from "react-router";


export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      languageSearchQuery: "",
      locationSearchQuery: "",
      filteredUsers: "",
      filteredLocation: "",
      showResults: false
    };
  }

  searchDatabase() {

    
    let filteredUsers = users
      .filter(user =>
        user.language
          .toLowerCase()
          .includes(this.state.languageSearchQuery.toLowerCase())
      )
      .map(profile => (
        <SearchResults
          key={profile.id}
          id={profile.id}
          image={profile.image}
          name={profile.name}
          language={profile.language}
          location={profile.location}
          availability={profile.availability}
        />
      ));
    let filteredLocation = users
      .filter(user =>
        user.location
          .toLowerCase()
          .includes(this.state.locationSearchQuery.toLowerCase())
      )
      .map(profile => (
        <SearchResults
          key={profile.id}
          id={profile.id}
          image={profile.image}
          name={profile.name}
          language={profile.language}
          location={profile.location}
          availability={profile.availability}
        />

      ));
    
      this.props.searchData(filteredUsers, filteredLocation, this.state.languageSearchQuery,this.state.locationSearchQuery);

      this.setState({showResults: true});


  }

  render() {
    return (
      <div className="SearchBar">
        <input
          className="search-bar"
          type="search"
          placeholder="search language"
          onChange={e => this.setState({ languageSearchQuery: e.target.value })}
        />
        <input
          className="search-bar"
          type="search"
          placeholder="search location"
          onChange={e => this.setState({ locationSearchQuery: e.target.value })}
        />
        <button  className="search-bar search-button"  onClick={() => this.searchDatabase()}>Search</button>
       {this.state.showResults && 
         <Redirect to = "/results" />
       }
       
       
      </div>
    );
  }
}
