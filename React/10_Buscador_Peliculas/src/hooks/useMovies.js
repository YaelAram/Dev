import { useRef, useState, useMemo, useCallback } from "react";
import { getMoviesByTitle } from "../providers/movies";

export const useMovies = ({ query, sort }) => {
  const [movies, setMovies] = useState([]);
  const [hasMovies, setHasMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const previousQuery = useRef(query);

  const getMovies = useCallback(async (query) => {
    if (previousQuery.current === query) return;
    try {
      previousQuery.current = query;
      setIsLoading(true);
      setErrorMsg(null);
      const { ok, movies } = await getMoviesByTitle(query);
      setHasMovies(ok);
      setMovies(movies);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((movie1, movie2) =>
          movie1.title.localeCompare(movie2.title)
        )
      : movies;
  }, [sort, movies]);

  return {
    movies: sortedMovies,
    hasMovies,
    isLoading,
    errorMsg,
    getMovies,
  };
};
