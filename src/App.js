import './App.css';
import { useState, useEffect } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Gallery from './Gallery';

function App() {
  const [userQuery, setUserQuery] = useState('')
  const [showGallery, setShowGallery] = useState(true)
  
  // default states 
  // store state as an empty string as an argument
  // useState returns two values in an array 
  // destructured inside an array
  // setter function that updates that piece of state 

  const searchQuery = () => {
    // redirect a user to new url 
    // window object with open function 
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const toggleShowGallery = () => {
    setShowGallery(!showGallery)
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      searchQuery()
    }
  }

  const updateUserQuery = (event) => {
    setUserQuery(event.target.value)
    console.log('userQuery', userQuery)
    // event object
    // whatever text is typed into input field by user
  }
  return (
    <div className="App">
    <h1>Hello, Ali!</h1>
    <div className='form'>
      <input 
      type='text'
      value={userQuery} 
      onChange={updateUserQuery}
      onKeyPress={handleKeyPress}
       />
      <button onClick={searchQuery}>Search</button>
      {userQuery}
    </div>
    <hr />
    <Joke />
    <hr />
    <Stories />
    <hr />
    <Tasks />
    <hr />
    <div>
    {
      showGallery ? <Gallery /> : null
    }
    <button onClick={toggleShowGallery}>
      {showGallery ? 'Hide' : 'Show'} Gallery
    </button>
    </div>
    </div>
  );
}

export default App;
