import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Calendar from './Calendar';
import Results from './Results';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <Search search='language' />
        <Search search='location' />
        <button className='searchbtn'>Search</button>
        <Calendar />
      </body>
      <Router>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/results' component={Results} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
