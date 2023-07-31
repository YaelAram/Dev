import { useMemo } from "react";
import debounce from "just-debounce-it";

import { Movies, Loader } from "./components";
import { useMovies, useQuery } from "./hooks";

import "./App.css";

function App() {
  const { query, error, sort, updateInput, handleSort } = useQuery();
  const { hasMovies, movies, isLoading, errorMsg, getMovies } = useMovies({
    query,
    sort,
  });

  const debouncedGetMovies = useMemo(
    () =>
      debounce((query) => {
        getMovies(query);
      }, 500),
    [getMovies]
  );

  const handleChange = (evt) => {
    const newQuery = evt.target.value;
    updateInput(newQuery);
    debouncedGetMovies(newQuery);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (query) getMovies(query);
  };

  return (
    <div className="flex-center page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="flex-center" onSubmit={handleSubmit}>
          <input
            type="text"
            name="movie"
            placeholder="Star Wars"
            value={query}
            onChange={handleChange}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main className="flex-center">
        {isLoading ? (
          <Loader />
        ) : (
          <Movies hasMovies={hasMovies} movieTitle={query} movies={movies} />
        )}
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      </main>
    </div>
  );
}

export default App;
