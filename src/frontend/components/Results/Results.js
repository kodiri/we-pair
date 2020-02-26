import React from "react";
import "./Results.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "./SearchResults";
// import Header from "../Header/Header";

export default class Results extends React.Component {
  render() {
    return (
      <div>
        <SearchBar
          searchData={(
            filteredUsers,
            filteredLocation,
            languageSearchQuery,
            locationSearchQuery
          ) =>
            this.props.searchData(
              filteredUsers,
              filteredLocation,
              languageSearchQuery,
              locationSearchQuery
            )
          }
          filteredUsers={this.props.filteredUsers}
          filteredLocation={this.props.filteredLocation}
        />
        {this.props.filteredUsers}

        {/* <SearchResults name="nam" location="loc" language="lang"/>  */}
      </div>
    );
  }
}
