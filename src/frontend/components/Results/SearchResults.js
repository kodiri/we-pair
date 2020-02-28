import React from "react";
import "./Results.css";

import { Link } from "react-router-dom";

export default class SearchResults extends React.Component {
  getProfile() {
    return `Profile name returned`;
  }

  render() {
    return (
      <>
        <Link to={`/profile/${this.props.id}`}>
          <ul className="card">
            <li className="card-list stack">
              <img className="user-image" src={this.props.image} alt="people" />
              <div className="stacked">
                <p className="result-detail">
                  &#123;
                  <br />
                  <span className="key">name: </span>
                  <span className="value">&#34;{this.props.name}&#34;</span>,
                  <br />
                  <span className="key">language: </span>
                  <span className="value">&#34;{this.props.language}&#34;</span>
                  ,<br />
                  <span className="key">location: </span>
                  <span className="value">&#34;{this.props.location}&#34;</span>
                  ,<br />
                  <span className="key">availability: </span>
                  <span className="value">
                    &#34;{this.props.availability}&#34;
                  </span>
                  <br />
                  &#125;
                </p>
                {/* <Link to={`/profile/${this.props.id}`}> <span>See other availabale dates</span></Link> */}
              </div>
            </li>
          </ul>
        </Link>
      </>
    );
  }
}
