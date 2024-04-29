import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {

  const [jokes, setJokes] = React.useState([])

  React.useEffect(() => {

    // axios is used for api request and auto converts the recieved raw data to readable format

    // the proxy in vite.config.js auto adds the url behind /api as well as the CORS will know that the request is coming to the this url itself so it will pass it 
    axios.get('/api/jokes')
      .then((response) => {
        // console.log(response.data);
        setJokes(response.data)
      }
      )
      .catch((error) => {
        console.log('failed to import data from backend', error);
      }
      )
  }
  )

  return (
    <>
      <h1>Full Stack Application</h1>
      <p>Jokes: {jokes.length}</p>
      <ul>

        {
          jokes.map((joke) => {
            return <li key={joke.id}>
              <h3>title: {joke.title}</h3>
              <p>content: {joke.content}</p>
            </li>
          }
          )
        }

      </ul>
    </>
  )
}

export default App
