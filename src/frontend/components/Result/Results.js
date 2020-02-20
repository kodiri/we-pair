import React from "react";
import "./Results.css";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";
import people from "../../image/people.png";

export function Results() {
  return (
    <div>
      <SearchBar />
      {/* <table className="resultsTable">
                <tr>
                    <th>User</th>
                    <th>Programming Language</th>
                    <th>Location</th>
                </tr>
                <tr>
                    <td>
                    <img className="user-image" src={people} alt="people" />
                    <div>dummy Name</div>
                    </td>
                    <td>dummy Language</td>
                    <td>dummy Location</td>
                </tr>
            </table> */}
    </div>
  );
}

export function SearchResults(props) {
  return (
    <table className="resultsTable">
      <tr>
        <th>User</th>
        <th>Programming Language</th>
        <th>Location</th>
      </tr>
      <tr>
        <td>
          <img className="user-image" src={people} alt="people" />
          <div>{props.name}</div>
        </td>
        <td>{props.language}</td>
        <td>{props.location}</td>
      </tr>
    </table>
  );
}
