import React from "react";
import "./Results.css";

import { Link } from "react-router-dom";

export default class SearchResults extends React.Component {
  getProfile() {
    return `Profile name returned`;
  }

  render() {
    return (
      <ul className="card">
        <li className="card-list stack">
          <Link to={`/profile/${this.props.id}`}>
            {" "}
            <div>
              <img className="user-image" src={this.props.image} alt="people" />
              <div>{this.props.name}</div>
            </div>
          </Link>

          <div className="stacked">
            Would like to get hands dirty on{" "}
            <strong>{this.props.language}</strong> at{" "}
            <strong>{this.props.location}</strong> on{" "}
            <strong>{this.props.availability}</strong>
            {/* <Link to={`/profile/${this.props.id}`}> <span>See other availabale dates</span></Link> */}
          </div>
        </li>
      </ul>
    );
  }
}
