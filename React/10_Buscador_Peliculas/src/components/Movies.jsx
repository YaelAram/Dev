import { ListOfMovies } from "./ListOfMovies";

export function NoMovieResults({ movieTitle }) {
  return <h3>{`No se encontraron resultados para: ${movieTitle}`}</h3>;
}

export function Movies({ hasMovies, movieTitle, movies }) {
  return hasMovies ? (
    <ListOfMovies movies={movies} />
  ) : (
    <NoMovieResults movieTitle={movieTitle} />
  );
}
