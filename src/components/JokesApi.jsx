import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function JokesApi() {

    const [joke, setJoke] = useState("");

    useEffect(() => {
        const fetchJoke = async() => {
            //To beable to READ information, you call axios.get() request.

            //To beable to UPDATE RECORD, you call axios.put or depart() request.

            //To beable to DELETE you call axios.delete() request.

            //To beable to CREATE, you call axios.create() request
            const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
            
            //To inject all the date from the effect inside the joke.
            //const jokesData = setJoke(response.data);
            setJoke(response.data)
        };
        fetchJoke();
         
    }, []); 

  return ( //2 method of Object data //1--Square bracket 2--Documentation 

    <div>
      <h1>Jokes API is real</h1>
      <h2>Joke Type: {joke.type}</h2>
      <h3>Joke ID:{joke.id}</h3>
      <p>Joke Setup:{joke.setup}</p>
      <p>Joke Punchline:{joke.punchline}</p>
    </div>
  )
}
