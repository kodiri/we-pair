import React from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import {SearchResults} from "../Result/Results"


const users = [
  {
    id: 1,
    name: "Anitha Dharneedharan ",
    language: "JavaScript",
    location: "Sutton"
  },
  {
    id: 2,
    name: "Florin Dumitru",
    language: "Python",
    location: "Walthamstow"
  },
  {
    id: 3,
    name: "Kainy Ryu",
    language: "Java",
    location: "Bethnal Green"
  },
  {
    id: 4,
    name: "Kamila Lew",
    language: "C++",
    location: "Heathrow"
  },
  {
    id: 5,
    name: "Selchuk Karakus",
    language: "Ruby",
    location: "Leytonstone"
  },
  {
    id: 6,
    name: "Estaban Espanyol",
    language: "Java",
    location: "Wood Green"
  }
];

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      languageSearchQuery: "",
      locationSearchQuery: "",
      filteredUsers: "",
      filteredLocation: ""
    };
  }

  searchDatabase() {
    let filteredUsers = users
      .filter(user => user.language
        .toLowerCase()
        .includes(this.state.languageSearchQuery.toLowerCase()))
      .map(profile =>   <SearchResults key={profile.id} name={profile.name} language={profile.language} location={profile.location}/>);
    let filteredLocation = users
      .filter(user => user.location
        .toLowerCase()
        .includes(this.state.locationSearchQuery.toLowerCase()))
      .map(profile => <h2>{profile.name}</h2>);
    if (this.state.languageSearchQuery && this.state.locationSearchQuery) {
      this.setState({
        filteredUsers,
        filteredLocation
      });
    } else if (this.state.languageSearchQuery) {
      this.setState({
        filteredUsers
      });
    } else if (this.state.locationSearchQuery) {
      this.setState({
        filteredLocation
      });
    }
    else {
      return "Please try again";
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          className="search-language-input"
          type="search"
          placeholder="search language"
          onChange={e => this.setState({ languageSearchQuery: e.target.value })}
        />
        <input
          className="search-location-input"
          type="search"
          placeholder="search location"
          onChange={e => this.setState({ locationSearchQuery: e.target.value })}
        />
        {/* <h1>{this.state.searchValue}</h1> */}
        <button onClick={() => this.searchDatabase()}>Search</button>
        <Link to="/results"></Link>
        <h3>{this.state.filteredUsers}</h3>
        <h3>{this.state.filteredLocation}</h3>
      </div>
    );
  }
}
