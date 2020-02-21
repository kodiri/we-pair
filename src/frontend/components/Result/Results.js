import React from 'react';
import './Results.css';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import people from '../../image/people.png';

export function Results() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export function SearchResults(props) {
  return (
    <tbody>
      <tr>
        <td>
          <img className="user-image" src={people} alt="people" />
          <div>{props.name}</div>
        </td>
        <td>{props.language}</td>
        <td>{props.location}</td>
      </tr>
      </tbody>
  );
}
