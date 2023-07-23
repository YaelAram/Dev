import {
  component$,
  useComputed$,
  $,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  useLocation,
  useNavigate,
} from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemon/PokemonImage";
import { Modal } from "~/components/shared/modal/modal";
import { getPokemon } from "~/helpers/getPokemon";
import type { SmallPokemon } from "~/interfaces";

export const useGetPokemonList = routeLoader$<SmallPokemon[]>(
  async ({ query, redirect, pathname }) => {
    const offset = Number(query.get("offset") ?? "0");

    if (isNaN(offset) || offset < 0 || offset > 1_000)
      throw redirect(301, pathname);

    return getPokemon({ offset, limit: 30 });
  }
);

export default component$(() => {
  const pokemonList = useGetPokemonList();
  const location = useLocation();
  const nav = useNavigate();

  const isModalVisible = useSignal<boolean>(false);
  const modalPokemon = useStore<SmallPokemon>({
    id: 0,
    name: "",
  });

  const currentOffset = useComputed$<number>(() =>
    Number(new URLSearchParams(location.url.search).get("offset") ?? "0")
  );

  const prevPage = $(() => {
    if (currentOffset.value === 0) return;
    else if (currentOffset.value === 30) nav("/pokemon/list-ssr/");
    else nav(`/pokemon/list-ssr/?offset=${currentOffset.value - 30}`);
  });

  const nextPage = $(() => {
    if (currentOffset.value === 1000) nav("/pokemon/list-ssr/");
    else nav(`/pokemon/list-ssr/?offset=${currentOffset.value + 30}`);
  });

  const openModal = $((id: number, name: string) => {
    modalPokemon.id = id;
    modalPokemon.name = name;
    isModalVisible.value = true;
  });
  const closeModal = $(() => {
    isModalVisible.value = false;
  });

  return (
    <>
      <div class="flex flex-col">
        <span class="my-5 text-5xl">Status</span>
        <span>Current offset: {currentOffset.value}</span>
        <span class="mt-5">
          Navigating: {location.isNavigating ? "Yes" : "No"}
        </span>
      </div>
      <div class="mt-8">
        <button
          class="btn btn-primary mr-2"
          onClick$={prevPage}
          disabled={currentOffset.value === 0}
        >
          Previous
        </button>
        <button class="btn btn-primary mr-2" onClick$={nextPage}>
          Next
        </button>
      </div>

      <div class="grid grid-cols-7 mt-5">
        {pokemonList.value.map(({ id, name }) => (
          <div
            class="m-5 flex flex-col justify-center items-center"
            key={`${name}-${id}`}
            onClick$={() => openModal(id, name)}
          >
            <PokemonImage id={id} />
            <span class="capitalize">{name}</span>
          </div>
        ))}
      </div>
      <Modal isVisible={isModalVisible.value} closeFn={closeModal}>
        <div q:slot="title">{modalPokemon.name}</div>
        <div q:slot="content" class="flex flex-col justify-center items-center">
          <PokemonImage id={modalPokemon.id} />
          <span>Preguntandole a ChatGPT</span>
        </div>
      </Modal>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pokemon SSR",
  meta: [
    {
      name: "description",
      content: "Pokemon grid created with SSR",
    },
  ],
};
