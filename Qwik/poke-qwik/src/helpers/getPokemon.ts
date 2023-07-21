import type { SmallPokemon, PokemonList } from "~/interfaces";

interface getPokemonArgs {
  offset?: number;
  limit?: number;
}

export const getPokemon = async ({
  offset = 0,
  limit = 10,
}: getPokemonArgs): Promise<SmallPokemon[]> => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const params = new URLSearchParams();

  params.append("limit", String(limit));
  params.append("offset", String(offset));

  const resp = await fetch(`${url}?${params.toString()}`);
  const pokemonList: PokemonList = (await resp.json()) as PokemonList;

  return pokemonList.results.map(({ name, url }) => {
    return {
      id: Number(url.split("/").at(-2) ?? "1"),
      name,
    };
  });
};
