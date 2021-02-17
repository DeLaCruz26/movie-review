import logo from './logo.svg';
import './App.css';
import Movie from './movie'

function App() {
  const movies = [
    {name: 'Spaceballs',
    review: '6/10'},
    {name: 'Deadpool',
    review: '10/10'}, 
    {name: 'The Avengers',
    review: '8/10'}, 
    {name: 'The Matrix',
    review: '10/10'}
  ]
  return (
    <div className="App">
      {movies.map(movie => <Movie name={movie.name} review={movie.review}/>)}
    </div>
  );
}

export default App;
