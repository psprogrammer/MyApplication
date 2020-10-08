import React from 'react';
import classes from './Input.css';

const input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            <input
                className={classes.InputElement}
                type={props.type}
                value={props.value}
                onChange={props.changed}
                ref={ref} />
        </div>
    )
});

export default input;
