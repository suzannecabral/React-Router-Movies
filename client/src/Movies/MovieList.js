import React from 'react';
import {Link} from 'react-router-dom'

export default function MovieList(props) {
  console.log("Rendered Movie List")
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  
  return (


    <Link to={`/movies/${id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
      <div className="movie-director">
      Director: <em>{director}</em>
      </div>
      <div>test ID: {id}</div>
      <div className="movie-metascore">
      Metascore: <strong>{metascore}</strong>
      </div>
      </div>
    </Link>


  );
}
