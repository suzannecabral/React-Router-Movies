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
    
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          // console.log(response.data)
          setMovieList(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }, []);

  function matchMovie(id,arr){
    const foundMovies = arr.filter((movie)=>{
     return movie.id === id
    })
    return foundMovies[0]

  }

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once


    
    //find the object with the id rather than passing the id
    //pass in the actual object
    setSaved([...saved, matchMovie(id,movieList)])
    // ^^^ this is important
  };

    // console.log("This is the movies list:")
    // console.log(movieList)
    // console.log()
  return (
    <div>
      <SavedList list={ saved } />
      <div>
        <Route path='/movies/:id'>
         <Movie addToSavedList={addToSavedList} movies={movieList}/>
        </Route>
        <Route exact path='/'>
         <MovieList addToSavedList={addToSavedList} movies={movieList} />
        </Route>

      </div>
    </div>
  );
}
