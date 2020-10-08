import React from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends React.Component {
  render() {
    const { searchTerm, handleUpdate } = this.props;

    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch} />
        <input
          placeholder="Search term"
          value={searchTerm}
          onChange={e => handleUpdate(e.target.value)} />
      </div>
    );
  }
}

export default SearchBox;