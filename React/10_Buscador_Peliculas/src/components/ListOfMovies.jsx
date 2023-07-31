export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map(({ id, title, year, poster }) => (
        <li className="movie" key={id}>
          <img
            src={poster}
            alt={`${title} movie poster`}
            width={250}
            height={300}
          />
          <h3>{`${title} (${year})`}</h3>
        </li>
      ))}
    </ul>
  );
}
