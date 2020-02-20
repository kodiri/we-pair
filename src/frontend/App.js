import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Results, SearchResults }from './components/Result/Results';
import Profile from './components/Profile/Profile';
import RoutingPage from './components/RoutingPage/RoutingPage';
import './App.css';
import Header from '../frontend/components/Header/Header'

export default function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={RoutingPage} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}