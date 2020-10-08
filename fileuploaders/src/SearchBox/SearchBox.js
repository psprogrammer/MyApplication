import React from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class SearchBox extends React.Component {
    
    render(){
        return (
            <div className='SearchBox'>
                <FontAwesomeIcon icon={faSearch} />
                <input 
                    placeholder='Search Item' 
                    value={this.props.searchTerm} 
                    onChange={e => this.props.handleUpdate(e.target.value)}
                />
            </div>
        );
    }
}