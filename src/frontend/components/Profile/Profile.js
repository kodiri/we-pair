import React from "react";
import "./Profile.css";
import users from "../getUsers.js";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let userId = users.find(userId => userId.id === id);
    console.log(userId);
    console.log(id);
    this.setState({ userId: userId });
  }

  render() {
    return (
      <div>
        {
          <div className="user-wrapper">
            <div className="user_profile">User Profile</div>
            <img
              className="profile-image"
              src={this.state.userId.image}
              alt={this.state.userId.name}
            />
            <div className="user-name">{this.state.userId.name}</div>
            <div className="language">Programming language</div>
            <div className="user-language">{this.state.userId.Language}</div>
            <div className="location">Location</div>
            <div className="user-location">{this.state.userId.Location}</div>
            <textarea
              className="placeholder"
              placeholder="   Please type your message here!"
            ></textarea>
            <button className="send-button">Send</button>
          </div>
        }
      </div>
    );
  }
}
