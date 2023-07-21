import { createContextId } from "@builder.io/qwik";
import { type SmallPokemon } from "~/interfaces";

export interface PokeListState {
  currentPage: number;
  pokemon: SmallPokemon[];
  isLoading: boolean;
  isEnd: boolean;
}

export const PokeListContext = createContextId<PokeListState>(
  "pokemon.list-context"
);
