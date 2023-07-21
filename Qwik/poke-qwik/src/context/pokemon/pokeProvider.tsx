import {
  Slot,
  component$,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { PokeGameContext, type PokeGameState } from "./pokeGameContext";
import { PokeListContext, type PokeListState } from "./pokeListContext";

export const PokeProvider = component$(() => {
  const POKEMON_GAME_KEY = "pokemon-game";

  const pokemonGame = useStore<PokeGameState>({
    pokemonId: 1,
    isVisible: true,
    isBackMode: false,
  });

  const pokeList = useStore<PokeListState>({
    currentPage: 0,
    pokemon: [],
    isLoading: true,
    isEnd: false,
  });

  useContextProvider(PokeGameContext, pokemonGame);
  useContextProvider(PokeListContext, pokeList);

  useVisibleTask$(() => {
    const pokeGameState = localStorage.getItem(POKEMON_GAME_KEY);
    if (pokeGameState) {
      const {
        pokemonId = 1,
        isBackMode = false,
        isVisible = true,
      } = JSON.parse(pokeGameState) as PokeGameState;
      pokemonGame.pokemonId = pokemonId;
      pokemonGame.isBackMode = isBackMode;
      pokemonGame.isVisible = isVisible;
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => [
      pokemonGame.pokemonId,
      pokemonGame.isBackMode,
      pokemonGame.isVisible,
    ]);

    localStorage.setItem(POKEMON_GAME_KEY, JSON.stringify(pokemonGame));
  });

  return <Slot />;
});
