import React from 'react';
import './SearchBar.css';
import SearchBox from '../a-02-SearchBox/SearchBox';
import FilterOptions from '../a-02-FilterOptions/FilterOptions';

class SearchBar extends React.Component {
  render() {
    const {
      searchTerm,
      filterOption,
      handleUpdate,
      handleFilterChange
    } = this.props;

    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar__controls">
          <SearchBox
            searchTerm={searchTerm}
            handleUpdate={handleUpdate} />
          <FilterOptions
            filterOption={filterOption}
            handleFilterChange={handleFilterChange} />
        </div>
      </div>
    );
  }
}

export default SearchBar;