import React from "react";
export default function List({ movies=[], loading }) {
  return (
    <div key={movies}>
      <div className="movie__lists">
        {loading ? (
          <p>Loading...</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie__list">
              <figure className="movieImage">
                <img
                  src={movie.Poster}
                  className="movielogo"
                  alt={movie.Title}
                />
              </figure>
              <h2 id="#tickets" className="moviePrice">
                {movie.Type}
              </h2>
              <h4 className="name">{movie.Title}</h4>
              <h4 className="Year">{movie.Year}</h4>
              <h4 className="imdb">{movie.imdbID}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
}