import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results  from './components/Results/Results';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import './App.css';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {filteredUsers: '' , filteredLocation: '' }
  }

  searchData(filteredUsers, filteredLocation,languageSearchQuery,locationSearchQuery ) {
    
    debugger;
    if (languageSearchQuery && locationSearchQuery) {
      this.setState({
        filteredUsers,
        filteredLocation
      });
    } else if (languageSearchQuery) {
      this.setState({
        filteredUsers
      });
    } else if (locationSearchQuery) {
      this.setState({
        filteredLocation
      });
    } else {
      return "Please try again";
    }
    
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" render = {() => <Home searchData = {(a,b,c,d) => this.searchData(a,b,c,d)} />} />
            <Route exact path="/results" component={Results} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/profile/:id" component={Profile}></Route>
            
          </Switch>

     
        </Router>

        
      </div>
    );

  }

}