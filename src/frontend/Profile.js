import React from 'react';
import people from './image/people.png'
import './Profile.css'



export default function Profile() {
    return (
        <div className="user-wrapper">
            <div className="user_profile">User Profile</div>
            <img className="profile-image" src={people} alt="people" />
            <div className="user-name">Florin</div>
            <div className="language">Programming language</div>
            <div className="user-language">JavaScript, ReactJS</div>
            <div className="location">Location</div>
            <div className="user-location">London / Cairo</div>
            <textarea className="placeholder" placeholder="   Please type your message here!"></textarea>
            <button className="send-button">Send</button>
        </div>
    )
}