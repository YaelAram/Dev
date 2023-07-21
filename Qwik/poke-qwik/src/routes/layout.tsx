import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import NavBar from "~/components/shared/navbar/navbar";
import styles from "./styles.css?inline";
import { PokeProvider } from "~/context";

export default component$(() => {
  useStyles$(styles);

  return (
    <PokeProvider>
      <NavBar />
      <main class="flex flex-col items-center justify-center">
        <Slot />
      </main>
    </PokeProvider>
  );
});
