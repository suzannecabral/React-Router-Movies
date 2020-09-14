import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom'
import SavedList from './Movies/SavedList';

import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          // console.log(response.data)
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

    console.log("This is the movies list:")
    console.log(movieList)
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <div>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/movie-list/'>
            <li>Movie</li>
          </Link>
        </ul>


        <Switch>
          <Route path='/'>
            <Movie />
          </Route>
          <Route path='/movie-list/'>
            <MovieList movies={ movieList } />
          </Route>
        </Switch>



      </div>
    </div>
  );
}
