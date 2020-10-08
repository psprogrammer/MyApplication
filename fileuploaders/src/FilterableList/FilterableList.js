import React from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

export default class FilterableList extends React.Component {

    static defaultProps = {
        files: []
    };

    render(){

        const { searchTerm, filterOption } = this.props;

        const list = this.props.files
            .filter(file => file.name.includes(searchTerm) && (filterOption === 'All' || file.status === filterOption))
            .map((file, key) => <ListItem {...file} key={key} />)

        return (
            <div className='FilterableList'>
                {list}
            </div>
        )
    }
}