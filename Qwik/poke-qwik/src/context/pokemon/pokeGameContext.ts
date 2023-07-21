import { createContextId } from "@builder.io/qwik";

export interface PokeGameState {
  pokemonId: number;
  isBackMode: boolean;
  isVisible: boolean;
}

export const PokeGameContext = createContextId<PokeGameState>(
  "pokemon.game-context"
);
