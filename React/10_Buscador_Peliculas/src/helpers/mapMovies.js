export const mapMovies = (movies = []) => {
  return movies.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster,
    };
  });
};
