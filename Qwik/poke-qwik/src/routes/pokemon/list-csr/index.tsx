import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Pokemon CSR</h1>
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
