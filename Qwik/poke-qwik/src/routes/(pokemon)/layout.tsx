import { Slot, component$ } from "@builder.io/qwik";

import { PokeProvider } from "~/context";
import Navbar from "~/components/shared/navbar/navbar";

export default component$(() => {
  return (
    <PokeProvider>
      <Navbar />
      <main class="flex flex-col items-center justify-center">
        <Slot />
      </main>
    </PokeProvider>
  );
});
