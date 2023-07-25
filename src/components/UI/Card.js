import React, { useState } from 'react';

import Joke from '../JokeDisplay/Joke';
import Button from './Button';
import './Card.css';


const Card = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const [joke, setJoke] = useState({id: 0, setup: "Bad at Golf?", punchline: "Join the club."});

    const classes = 'card ' + props.className;

    //API request for random dad joke using fetch(). source: https://rapidapi.com/KegenGuyll/api/dad-jokes
    const fetchJoke = async () => {
        const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f412dabadbmsh6178f456828d5c5p11fb59jsn491d260a3482',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
        };
    
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setJoke({id:result.body[0]._id, setup: result.body[0].setup, punchline: result.body[0].punchline})
        } catch (error) {
            console.error(error);
        }
    }

    //New Joke button click handler
    const newJokeHandler = () => {
        setIsClicked(prev => !prev);
    }

    //if New Joke button is clicked then fetch the joke and update the joke state
    if (isClicked) {
        fetchJoke();
        setIsClicked(prev => !prev);
    }

    return (
        <div className={classes}>
            <h1>Dad Jokes</h1>
            <a href="https://rapidapi.com/KegenGuyll/api/dad-jokes/details">dadjokes.io</a>
            <Joke joke={joke}></Joke>
            <Button onClick={newJokeHandler}></Button>
        </div>
    )
}

export default Card;