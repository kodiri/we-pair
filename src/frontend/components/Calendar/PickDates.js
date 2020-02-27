import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import users from '../getUsers';

export default class PickDates extends Component {

    state = {
        value: new Date()
    }

    onChange = (value) => {
        debugger;
        this.setState({value});
        alert(`New date is ${value.toString()}`)
    }

    selectedDate = () => {
        return `The selected date is ${this.props.value} ` ;
    }

    render() {
        return(
            <div className="PickDates">
                 PickDates  
                 <Calendar onChange={this.onChange}
                    value= {this.state.value}
                    onClickDay = {this.selectedDate} 
                />
              <div>{users.map(user => user.availability[0])[0].toString()}</div>
            </div>
        );
    }
}