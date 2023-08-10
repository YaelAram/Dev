const URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

export const getFivePokemon = async () => {
  const resp = await fetch(URL);

  if (resp.ok) {
    const { results } = await resp.json();
    return results.map(({ name, url }) => {
      const id = url.split("/").at(-2);

      return {
        name: `${name.at(0).toUpperCase()}${name.slice(1)}`,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      };
    });
  }

  throw new Error("Error al obtener los pokemon");
};
