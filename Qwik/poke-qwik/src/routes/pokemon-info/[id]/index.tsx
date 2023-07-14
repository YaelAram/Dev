import { component$ } from "@builder.io/qwik";
import { type DocumentHead, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();

  return (
    <>
      <h1>Hola Pokemon Id: {location.params.id}</h1>
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
