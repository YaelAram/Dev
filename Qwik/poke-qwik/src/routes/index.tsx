import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import { usePokemonGame } from "~/hooks/usePokemonGame";

import { PokemonImage } from "~/components/pokemon/PokemonImage";

export default component$(() => {
  const {
    isBackMode,
    isVisible,
    isVisibleTitleBtn,
    nextPokemon,
    pokemonId,
    prevPokemon,
    toggleBackMode,
    toggleVisible,
  } = usePokemonGame();

  return (
    <>
      <span class="text-2xl">Buscador</span>
      <span class="text-9xl">{pokemonId.value}</span>
      <Link href={`/pokemon-info/${pokemonId.value}/`}>
        <PokemonImage
          id={pokemonId.value}
          backImage={isBackMode.value}
          isVisible={isVisible.value}
        />
      </Link>
      <div class="mt-2">
        <button onClick$={prevPokemon} class="btn btn-primary mr-2">
          Anterior
        </button>
        <button onClick$={nextPokemon} class="btn btn-primary mr-2">
          Siguiente
        </button>
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
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "Qwik site with PokeApi",
    },
  ],
};
