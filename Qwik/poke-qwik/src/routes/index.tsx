import { $, component$, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemon/PokemonImage";

export default component$(() => {
  const pokemonId = useSignal<number>(1);
  const isBackMode = useSignal<boolean>(false);
  const isVisible = useSignal<boolean>(true);
  const nav = useNavigate();

  const changePokemonId = $((value: number): void => {
    if (pokemonId.value + value < 1 || pokemonId.value + value > 1010) return;
    pokemonId.value += value;
  });

  const goToPokemonInfo = $(
    async () => await nav(`/pokemon-info/${pokemonId.value}/`)
  );

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
        <button
          onClick$={() => changePokemonId(-1)}
          class="btn btn-primary mr-2"
        >
          Anterior
        </button>
        <button
          onClick$={() => changePokemonId(+1)}
          class="btn btn-primary mr-2"
        >
          Siguiente
        </button>
        <button
          onClick$={() => (isBackMode.value = !isBackMode.value)}
          class="btn btn-primary mr-2"
        >
          Voltear
        </button>
        <button
          onClick$={() => (isVisible.value = !isVisible.value)}
          class="btn btn-primary mr-2"
        >
          {isVisible.value ? "Ocultar" : "Revelar"}
        </button>
        <button onClick$={goToPokemonInfo} class="btn btn-primary">
          Mas...
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
