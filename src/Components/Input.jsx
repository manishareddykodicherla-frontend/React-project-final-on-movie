export default function Input({ setSearchTerm, searchMovies }) {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          className="searchingMovie"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={searchMovies} className="btn-search">Search</button>
      </div>
    </div>
  );
}
