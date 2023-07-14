import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Pokemon SSR</h1>
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
