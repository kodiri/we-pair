import React from "react";
import "./Results.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "./SearchResults";
// import Header from "../Header/Header";

export default class Results extends React.Component {

  constructor() {
    super();
    this.state = {filteredUsers: '' , filteredLocation: '' }
  }

  render() {
    return (
      <div>
      <div>
        <SearchBar
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
          filteredUsers={this.state.filteredUsers}
          filteredLocation={this.state.filteredLocation}
        />
        {/* {this.state.filteredUsers && this.state.filteredLocation} */} 
        
       

      </div>
      {
      <SearchResults name="nam" location="loc" language="lang"/> }
      
      </div>
    );
  }
  
}
