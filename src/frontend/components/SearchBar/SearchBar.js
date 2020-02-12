import React from "react";
import "./SearchBar.css";

// Start array of user objects
const users = [
  {
    id: 1,
    name: "Anitha Dharneedharan ",
    Language: "JavaScript",
    Location: "Sutton"
  },
  {
    id: 2,
    name: "Florin Dumitru",
    Language: "Python",
    Location: "Walthamstow"
  },
  {
    id: 3,
    name: "Kainy Ryu",
    Language: "Java",
    Location: "Bethnal Green"
  },
  {
    id: 4,
    name: "Kamila Lew",
    Language: "C++",
    Location: "Heathrow"
  },
  {
    id: 5,
    name: "Selchuk Karakus",
    Language: "Ruby",
    Location: "Leytonstone"
  },
  {
    id: 6,
    name: "Estaban Espanyol",
    Language: "Java",
    Location: "Wood Green"
  },

];

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      filteredUsers: ''
    };
  }

  // handleChange(userInput) {
  //   this.setState({searchValue: userInput});
  // }

  activeList() {
    this.setState({filteredUsers: users.filter(user => user.Language.includes(this.state.searchValue))
    .map((profile) => <h2>{profile.name}</h2>)})
  }

  render() {
    return (
      <div className="Search">
        <input
          className="Search-language-input"
          type="search"
          placeholder="search language"
          onChange={(e) => this.setState({searchValue:(e.target.value)})}
        />
        <input
          className="Search-location-input"
          type="search"
          placeholder="search location"
        />
        <h3>{this.state.filteredUsers}</h3>
        {/* <h1>{this.state.searchValue}</h1> */}
        <button onClick={() => this.activeList()}>Press me</button>
      </div>
    );
  }
}
