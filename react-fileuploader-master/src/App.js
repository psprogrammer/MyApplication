import React from 'react';
import './App.css';
import FilterableList from './b-01-FilterableList/FilterableList';
import SearchBar from './a-01-SearchBar/SearchBar';


class App extends React.Component {
  // this is the original state
  state = {
    searchTerm: "",
    filterOption: "All"
  }

  // this updates the state
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  render() {
    const { searchTerm, filterOption } = this.state;
    const { files } = this.props;

    return (
      <div className="App">
        <SearchBar
          searchTerm={searchTerm}
          filterOption={filterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)} />
        <FilterableList
          files={files}
          searchTerm={searchTerm}
          filterOption={filterOption} />
      </div>
    );
  }
}

export default App;