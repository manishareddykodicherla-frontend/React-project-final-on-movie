import logo from './logo.svg';
import './App.css';

import "./App.css";
import Nav from "./Components/Nav";
import List from "./Components/List";
import Filter from "./Components/Filter";
import Input from "./Components/Input";
import { useState } from "react";
import axios from "axios";
  
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchMovies() {
    setLoading(true);
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=3608d43&s=${searchTerm}`
    );
    const { Search: data } = res.data;
    setMovies(data);
    console.log(data);
    setLoading(false);
  }
  function filterMovies(sortValue) {
    if (sortValue === "movie_title") {
      const sortedMovies = [...movies].sort((a, b) =>
        a.Title.localeCompare(b.Title)
      );
      setMovies(sortedMovies);
    }

    if (sortValue === "MOVIE__YEAR__NEW__TO_OLD") {
      const sortedMovies = [...movies].sort(
        (a, b) =>
          a.Year.toString(``).slice(0, 4) - b.Year.toString(``).slice(0, 4)
      );
      setMovies(sortedMovies);
    }
    if (sortValue === "MOVIE__YEAR__OLD__TO_NEW") {
      const sortedMovies = [...movies].sort(
        (a, b) =>
          b.Year.toString(``).slice(0, 4) - a.Year.toString(``).slice(0, 4)
      );
      setMovies(sortedMovies);
    }
  }
  return (
    <div className="App">
      <Nav />
      <Input setSearchTerm={setSearchTerm} searchMovies={searchMovies} />
      <Filter filterMovies={filterMovies} movies={movies} />
      <List movies={movies} loading={loading} />
    </div>
  );
}
export default App;
