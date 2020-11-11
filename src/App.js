import React from 'react';
import Header from './components/Header'
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'
import Rating from './components/Rating'
import './App.css';

class App extends React.Component{
  render(){

    return( 
      <div>
        <Header />
        <MovieCard />
        <MovieList />
        <Rating />
      </div>

    );
  };
}
 

export default App;
