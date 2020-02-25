
import React from 'react';
import people from "../../image/people.png";

import { Link } from "react-router-dom";


export default class SearchResults extends React.Component {
    getProfile() {
      return `Profile name returned`;
    }
  
    render() {
      return (
        <div className="stack">
          
            <div>
            <Link to={`/profile/${this.props.id}`}> <img className="user-image" src={people} alt="people" /></Link>
              <div>{this.props.name}</div>
            </div>
          
          <div>{this.props.language}</div>
          <div>{this.props.location}</div>
          <div>{this.props.availability}
          <Link to="/profile"> <span>See other availabale dates</span></Link></div>
        </div>
      );
    }
  }