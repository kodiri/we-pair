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
      <div className="profile">
        <div className="user-wrapper">
          <img
            className="profile-image"
            src={this.state.userId.image}
            alt={this.state.userId.name}
          />
          <div className="profile-detail">
            <span>&#123;</span>
            <div className="user-list user-name"><span className="key">name: </span> <span className="value">	&#34;{this.state.userId.name}	&#34;</span>,</div>

            <div className="user-list">
            <span className="key">language: </span> <span className="value">	&#34;{this.state.userId.language}	&#34;</span>,
            </div>

            <div className="user-list">
            <span className="key">location :</span> <span className="value">	&#34;{this.state.userId.location}&#34;</span>
            </div>
            <span>&#125;</span>
          </div>
        </div>
        {/* <button className="send-button">Send</button> */}
        <PickDates/>
        <textarea placeholder="Leave a message..."/>
        <div>
          <a href="mailto:anitha.k.dharaneedharan@gmail.com?Subject=Hello">
            Send email
          </a>
        </div>
      </div>
    );
  }
}
