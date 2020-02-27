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
            <img className="user-image" src={this.props.image} alt="people" />
          </Link>
          <div className="stacked">
            <p className="result-detail">
              &#123;<br />
              <span className="key">name: </span><span className="value">{this.props.name}</span><br />
              <span className="key">language: </span><span className="value">{this.props.language}</span><br />
              <span className="key">location: </span><span className="value">{this.props.location}</span><br />
              <span className="key">availability: </span><span className="value">{this.props.availability}</span><br />
              &#125;
            </p>
            {/* <Link to={`/profile/${this.props.id}`}> <span>See other availabale dates</span></Link> */}
          </div>
        </li>
      </ul>
    );
  }
}
