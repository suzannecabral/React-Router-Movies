import React from 'react';
import MovieCard from './MovieCard'
import Movie from './Movie'
import {Link} from 'react-router-dom'

export default function MovieList(props) {
  console.log('MovieList.js: ', props)
  console.log("Rendered Movie List")
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        // <MovieDetails key={movie.id} movie={movie} />
      <Link to={`/movies/${movie.id}`}>
        <MovieCard movie={movie} />
      </Link>
      ))}
    </div>
  );
}

// function MovieDetails(props) {
//   console.log('MovieDetails: ', props)
//   const { title, director, metascore, id } = props.movie;
  
//   return (

//     // <Link to={`/movies/${id}`}>
//     //   {/* <MovieCard movie = {movie} /> */}
//     //   <div className="movie-card">
//     //     <h2>{title}</h2>
//     //   <div className="movie-director">
//     //   Director: <em>{director}</em>
//     //   </div>
//     //   <div className="movie-metascore">
//     //   Metascore: <strong>{metascore}</strong>
//     //   </div>
//     //   </div>
//     // </Link>

//   );
// }
