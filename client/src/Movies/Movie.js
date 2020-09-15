import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard'
import { useParams, Route, useRouteMatch } from 'react-router-dom'


export default function Movie(props) {
  const [movie, setMovie] = useState();
  const { addToSavedList } = props

  // const { movies } = props
  const { id } = useParams()
  //finds the ID from the url
  //matches param from route
  const { url, path } = useRouteMatch
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL


  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      // .get(`http://localhost:5000/api/movies/1`) // Study this endpoint with Postman
      .then(response => {
    
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state

        console.log('Movie.JS:', response.data)
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  console.log("Rendered Movie Component:")
  // console.log('movie url', url)
  // console.log('movie path', path)
  console.log('movie id', movie.id)
  console.log(movie)

  return (
    <MovieCard addToSavedList={addToSavedList} movie={movie} />
  ) 
    // <div className="save-wrapper">
    //    <div className="movie-card">
    //     <h2>{title}</h2>
    //     <div className="movie-director">
    //       Director: <em>{director}</em>
    //     </div>
    //     <div className="movie-metascore">
    //       Metascore: <strong>{metascore}</strong>
    //     </div>
    //     <h3>Actors</h3>

    //     {stars.map(star => (
    //       <div key={star} className="movie-star">
    //         {star}
    //       </div>
    //     ))}
    //   </div>
    //   <div className="save-button">Save</div> 
    // </div>
  
}
