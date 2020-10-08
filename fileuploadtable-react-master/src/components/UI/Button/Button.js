import React from 'react';
import classes from './Button.css';

const Button = React.forwardRef((props, ref) => {
    return (
        <button
            disabled={props.disabled}
            className={classes.Button}
            ref={ref}>
            {props.children}
        </button>
    );
})

export default Button;
