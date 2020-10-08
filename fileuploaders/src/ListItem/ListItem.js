import React, {Component} from 'react';
import './ListItem.css';
import ControlBar from '../ControlBar/ControlBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFileImage,
    faFileAudio,
    faFileAlt,
    faFileVideo
} from '@fortawesome/free-solid-svg-icons';

export default class ListItem extends Component {
    
    static defaultProps = {
        'fileType' : '',
        'size' : '',
        'name' : '',
        'status' : ''
    }

    render(){

        const icons = {
            'jpg': faFileImage,
            'mov': faFileVideo,
            'txt': faFileAlt,
            'mp3': faFileAudio
        }

        return (
            <div className='ListItem'>
                <div className='ListItem__icon'>
                    <div className='ListItem__circle'>
                        <FontAwesomeIcon icon={icons[this.props.fileType]} />
                    </div>
                </div>
                <div className='ListItem__content'>
                    <div className='ListItem__heading'>
                        <div className='ListItem__title'>{this.props.name}</div>
                        <div className='ListItem__size'>{this.props.size}</div>
                    </div>
                    <div className='ListItem__Actions'>
                        <div className='ListItem__status'>
                            {this.props.status}
                        </div>
                        <ControlBar />
                    </div>
                </div>
            </div>
        )
    }
}