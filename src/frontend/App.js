import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Results from "./components/Results/Results";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import "./App.css";

function NotFound() {
  return(
    <>
      <p>
      &#47;&#47;page not found
      </p>
    </>
  ) 
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { filteredUsers: "", filteredLocation: "", message: "" };
  }

  searchData(
    filteredUsers,
    filteredLocation,
    languageSearchQuery,
    locationSearchQuery
  ) {
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
      this.setState({
        message: "No Result"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  searchData={(
                    filteredUsers,
                    filteredLocation,
                    languageSearchQuery,
                    locationSearchQuery
                  ) =>
                    this.searchData(
                      filteredUsers,
                      filteredLocation,
                      languageSearchQuery,
                      locationSearchQuery
                    )
                  }
                />
              )}
            />
            <Route
              exact
              path="/results"
              render={() => (
                <Results
                  message={this.state.message}
                  filteredUsers={this.state.filteredUsers}
                  filteredLocation={this.state.filteredLocation}
                  searchData={(
                    filteredUsers,
                    filteredLocation,
                    languageSearchQuery,
                    locationSearchQuery
                  ) =>
                    this.searchData(
                      filteredUsers,
                      filteredLocation,
                      languageSearchQuery,
                      locationSearchQuery
                    )
                  }
                />
              )}
            />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/profile/:id" component={Profile}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
