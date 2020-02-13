import React from 'react';
import Header from './components/Header/Header';
import Search from './components/SearchBar/SearchBar';
import Calendar from './components/Calender';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Results from './components/Result/Results';
import Profile from './components/Profile/Profile';
import RoutingPage from './components/RoutingPage/RoutingPage';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Calendar />
    <Router>
      <Switch>
        <Route exact path="/" component={RoutingPage} />
        <Route exact path="/results" component={Results} /> 
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
    </div>
  );
}