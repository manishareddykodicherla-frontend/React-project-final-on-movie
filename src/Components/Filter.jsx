import React from "react";

export default function Filter({ movies, filterMovies }) {
  return (
    <div>
      <div className="filter">
        <select
          className="movieFilter"
          onChange={(e) => filterMovies(e.target.value)}
        >
         <option value="">
            sort
          </option>
          <option value="MOVIE__YEAR__NEW__TO_OLD">
            Movie , Newest to Oldest
          </option>
          <option value="MOVIE__YEAR__OLD__TO_NEW">
            Movie , Oldest to Newest 
          </option>
          <option value="movie_title">Movie Name</option>
        </select>
      </div>
    </div>
  );
}