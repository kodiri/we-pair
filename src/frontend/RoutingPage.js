import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function RoutingPage() {
  return (
    <Router>
      <Switch>
        <Header />
        <Route exact path="/" component={App} />
        {/* <Route exact path="/Result" component={Result} /> */}
        {/* <Route exact path='/profile' component={Profile} /> */}
      </Switch>
    </Router>
  );
}
