import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

import { usePokemonGame } from "~/hooks/usePokemonGame";
import { PokemonImage } from "~/components/pokemon/PokemonImage";

export const usePokemonId = routeLoader$<number>(({ params, redirect }) => {
  const id = Number(params.id);
  if (isNaN(id) || id < 1) throw redirect(301, "/");

  return id;
});

export default component$(() => {
  const pokemonId = usePokemonId();
  const {
    isBackMode,
    isVisible,
    isVisibleTitleBtn,
    toggleBackMode,
    toggleVisible,
  } = usePokemonGame();

  return (
    <>
      <h1>Pokemon: {pokemonId.value}</h1>
      <PokemonImage
        id={pokemonId.value}
        backImage={isBackMode.value}
        isVisible={isVisible.value}
      />
      <div class="mt-2">
        <button onClick$={toggleBackMode} class="btn btn-primary mr-2">
          Girar
        </button>
        <button onClick$={toggleVisible} class="btn btn-primary mr-2">
          {isVisibleTitleBtn}
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Search",
  meta: [
    {
      name: "description",
      content: "Search pokemon by id page",
    },
  ],
};
