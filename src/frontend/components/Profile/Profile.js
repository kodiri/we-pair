import React from 'react';
import people from '../../image/people.png'
import './Profile.css'
import users from '../getUsers.js';
import PickDates from '../Calendar/PickDates';

export default class Profile extends React.Component {

    constructor() {
        super();
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let user =  users.find(user => user.id === id);

        this.setState({ user: user });
    }
    render() {
        return (
            <div class="parent">
                 <img className="profile-image child" src={people} alt="people" />
                 <div className="user-name child">{this.state.user.name}</div>
                
            </div>
        )
    }
}



// <div className="user-wrapper">
// {/* <div className="user_profile">User Profile</div> */}
// <img className="profile-image" src={people} alt="people" />
// <div className="user-name">{this.state.user.name}</div>
// {/* <div className="language">Programming language</div> */}
// <div className="user-language">{this.state.user.language}</div>
// {/* <div className="location">Location</div> */}
// <div className="user-location">{this.state.user.location}</div>
// {/* <PickDates/> */}
// <textarea className="placeholder" placeholder="   Please type your message here!"></textarea>
// <button className="send-button">Sends</button>
// <a href="mailto:anitha.k.dharaneedharan@gmail.com:?Subject=Hello">Send email</a>
// </div>