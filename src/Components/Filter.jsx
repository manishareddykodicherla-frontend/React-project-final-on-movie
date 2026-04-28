import React from "react";
export default function Filter({ movies, filterMovies }) {
  return (
    <div>
      <div className="filter">
        <select
          className="movieFilter"
          onChange={(e) => filterMovies(e.target.value)}
        >
          <option defaultValue="sort" selected value={""}>
            sort
          </option>
          <option value="MOVIE__YEAR__NEW__TO_OLD">
            movie year, new__to__old
          </option>
          <option value="MOVIE__YEAR__OLD__TO_NEW">
            movie year, old__to__new
          </option>
          <option value="movie_title">movie Name</option>
        </select>
      </div>
    </div>
  );
}