import React from 'react';
import { useFetch } from './hooks';
// useEffect has side effects and like a life cycle method
// applies after every render()
// custom hooks useFetch

const Joke = () => {
    const { setup, punchline } = useFetch('https://official-joke-api.appspot.com/jokes/random', {})

    return (
        <div>
            <h3>Joke of the Session</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </div>
    )
}

export default Joke