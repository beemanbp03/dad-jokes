import React, { Fragment } from 'react';

import './Joke.css';

const Joke = (props) => {
    
    const classes = 'joke ' + props.className;

    return (
        <Fragment>
            <p className={classes}>{props.joke.setup}</p>
            <p className={classes}>{props.joke.punchline}</p>
        </Fragment>
    )
}

export default Joke;