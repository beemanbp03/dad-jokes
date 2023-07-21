import React, { Fragment } from 'react';

import './Button.css'

const Button = (props) => {
    const classes = 'button ' + props.children;

    const handleClick = () => {
        props.onClick(true);
    }

    return (
        <Fragment>
            <button className={classes} onClick={handleClick}>New Joke</button>
        </Fragment>
    )
}

export default Button;