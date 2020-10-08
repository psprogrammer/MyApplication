import React, { Component } from "react";
import "./SearchBar.css";
import SearchBox from "../SearchBox/SearchBox";
import FilterOptions from "../FilterOptions/FilterOptions";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar__controls">
          <SearchBox
            searchTerm={this.props.searchTerm}
            handleUpdate={this.props.handleUpdate}
          />
          <FilterOptions
            filterOption={this.props.filterOption}
            handleFilterChange={this.props.handleFilterChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
