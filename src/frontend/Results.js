import React from 'react';
import './Results.css';
import people from './image/people.png'



export default function Results() {
    return (
        <div className="user-wrapper">
            <div className="a user_profile">User Profile</div>
            <img className="b profile-image" src={people} alt="people" />
            <div className="c user-name">Florin</div>
            <div className="d language">Programming language</div>
            <div className="e user-language">JavaScript, ReactJS</div>
            <div className="f location">Location</div>
            <div className="g user-location">London / Cairo</div>
            <textarea className="h" placeholder="   Please type your message here!"></textarea>
            <button className="i">Send</button>
        </div>
    )
}