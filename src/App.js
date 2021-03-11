import logo from './logo.svg';
import './App.css';
import Movie from './movie'
import Form from './form'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import ReviewedMovies from './ReviewedMovies'
import ReviewMovie from './ReviewMovie'

function App() {
  const [movies, setMovies] = useState([
    {name: 'Spaceballs',
    review: '6'},
    {name: 'Deadpool',
    review: '10'}, 
    {name: 'The Avengers',
    review: '8'}, 
    {name: 'The Matrix',
    review: '10'}
  ]);
 const handleSubmit = (newMovie) => {
    setMovies([...movies, newMovie])
 }
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/reviewed-movies' component={ReviewedMovies} />
        <Route path='/review-movie' component={ReviewMovie} />
      </Router >
      {movies.map(movie => <Movie name={movie.name} review={movie.review}/>)}
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
