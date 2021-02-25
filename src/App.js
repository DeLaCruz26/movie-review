import logo from './logo.svg';
import './App.css';
import Movie from './movie'
import Form from './form'
import React, { useState } from 'react'

function App() {
  const [movies, setMovies] = useState([
    {name: 'Spaceballs',
    review: '6/10'},
    {name: 'Deadpool',
    review: '10/10'}, 
    {name: 'The Avengers',
    review: '8/10'}, 
    {name: 'The Matrix',
    review: '10/10'}
  ]);
 const handleSubmit = (newMovie) => {
    setMovies([...movies, newMovie])
 }
  return (
    <div className="App">
      {movies.map(movie => <Movie name={movie.name} review={movie.review}/>)}
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
