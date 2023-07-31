import { mapMovies } from "../helpers/mapMovies";

const API_KEY = "802da6be";

export const getMoviesByTitle = async (title) => {
  try {
    const params = new URLSearchParams();
    params.set("apikey", API_KEY);
    params.set("s", title);

    const resp = await fetch(`http://www.omdbapi.com?${params.toString()}`);
    let movies = await resp.json();

    const ok = movies.Response === "True";
    if (ok) movies = mapMovies(movies.Search);

    return {
      ok,
      movies,
    };
  } catch (e) {
    throw new Error("Error searching movies");
  }
};
