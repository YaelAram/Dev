import { $, useComputed$, useContext } from "@builder.io/qwik";
import { PokeGameContext } from "~/context";

export const usePokemonGame = () => {
  const pokeGame = useContext(PokeGameContext);

  const changePokemonId = $((value: number): void => {
    if (pokeGame.pokemonId + value < 1) return;
    pokeGame.pokemonId += value;
  });

  const toggleBackMode = $(() => {
    pokeGame.isBackMode = !pokeGame.isBackMode;
  });

  const toggleVisible = $(() => {
    pokeGame.isVisible = !pokeGame.isVisible;
  });

  const isVisibleTitleBtn = useComputed$<string>(() =>
    pokeGame.isVisible ? "Ocultar" : "Revelar"
  );

  return {
    pokemonId: useComputed$(() => pokeGame.pokemonId),
    isBackMode: useComputed$(() => pokeGame.isBackMode),
    isVisible: useComputed$(() => pokeGame.isVisible),
    isVisibleTitleBtn,
    toggleBackMode,
    toggleVisible,
    prevPokemon: $(() => changePokemonId(-1)),
    nextPokemon: $(() => changePokemonId(+1)),
  };
};
