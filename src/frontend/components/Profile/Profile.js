import React from "react";
import "./Profile.css";
import users from "../getUsers.js";
import PickDates from "../Calendar/PickDates";

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
        <div className="user-wrapper">
          <img
            className="profile-image"
            src={this.state.userId.image}
            alt={this.state.userId.name}
          />
          <div className="user-list user-name">{this.state.userId.name}</div>

          <div className="user-list">
            Likes to pair program in {this.state.userId.language}
          </div>

          <div className="user-list">
            Location : {this.state.userId.location}
          </div>

          {/* <button className="send-button">Send</button> */}
          <PickDates/>
          
          <a href="mailto:anitha.k.dharaneedharan@gmail.com?Subject=Hello">
            Send email
          </a>
         
        </div>
      </div>
    );
  }
}
