import { component$ } from "@builder.io/qwik";

import styles from "./loader.module.css";

export const Loader = component$(() => {
  return <div class={styles.loader}></div>;
});
