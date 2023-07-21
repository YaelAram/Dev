import {
  $,
  component$,
  useContext,
  useOnDocument,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { getPokemon } from "~/helpers/getPokemon";
import { PokemonImage } from "~/components/pokemon/PokemonImage";
import { PokeListContext } from "~/context";

export default component$(() => {
  const pokeList = useContext(PokeListContext);

  const incrementPage = $(() => {
    if (pokeList.currentPage + 1 === 128) return;
    pokeList.currentPage++;
  });

  useVisibleTask$(async ({ track }) => {
    track(() => pokeList.currentPage);

    if (!pokeList.isEnd) {
      const pokemon = await getPokemon({
        offset: pokeList.currentPage * 30,
        limit: 30,
      });
      pokeList.isLoading = false;

      if (pokemon.length) pokeList.pokemon = [...pokeList.pokemon, ...pokemon];
      else pokeList.isEnd = true;
    }
  });

  useOnDocument(
    "scroll",
    $(() => {
      const maxScroll = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;
      if (
        currentScroll + 200 >= maxScroll &&
        !pokeList.isLoading &&
        !pokeList.isEnd
      ) {
        pokeList.isLoading = true;
        pokeList.currentPage++;
      }
    })
  );

  return (
    <>
      <div class="flex flex-col">
        <span class="my-5 text-5xl">Status</span>
        <span>Current page: {pokeList.currentPage + 1}</span>
      </div>
      <div class="mt-8">
        <button class="btn btn-primary mr-2" onClick$={incrementPage}>
          Next
        </button>
      </div>

      <div class="grid grid-cols-7 mt-5">
        {pokeList.pokemon.map(({ id, name }) => (
          <div
            class="m-5 flex flex-col justify-center items-center"
            key={`${name}-${id}`}
          >
            <PokemonImage id={id} />
            <span class="capitalize">{name}</span>
          </div>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pokemon CSR",
  meta: [
    {
      name: "Pokemon CSR",
      content: "Pokemon grid generated with CSR",
    },
  ],
};
