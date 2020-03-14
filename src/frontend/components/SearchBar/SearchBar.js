import React from "react";
import "./SearchBar.css";
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
      <div className="search-bars">
        <input
          className="search-bar"
          type="search"
          placeholder="&gt; Language"
          onChange={e => this.setState({ languageSearchQuery: e.target.value })}
          onKeyPress={e => e.key === 'Enter' ? this.searchDatabase() : this.setState({ languageSearchQuery: e.target.value }) }
        />
        <input
          className="search-bar"
          type="search"
          placeholder="&gt; Location"
          onChange={e => this.setState({ locationSearchQuery: e.target.value })}
          onKeyPress={e => e.key === 'Enter' ? this.searchDatabase() : this.setState({ locationSearchQuery: e.target.value }) }
        />
        <button  
          className="search-button"  
          onClick={() => this.searchDatabase()}
        >
          Search
        </button>
       {this.state.showResults && 
         <Redirect to = "/results" />
       }
      </div>
    );
  }
}
