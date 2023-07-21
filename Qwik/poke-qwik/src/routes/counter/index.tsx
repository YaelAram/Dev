import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { useCounter } from "~/hooks/useCounter";

export default component$(() => {
  const { counter, decrement, increment } = useCounter(1, {
    minValue: 1,
    maxValue: 20_000,
  });

  return (
    <>
      <span class="text-2xl">Counter</span>
      <span class="text-7xl">{counter.value}</span>
      <div class="mt-2">
        <button class="btn btn-primary mr-2" onClick$={() => decrement(1)}>
          -1
        </button>
        <button class="btn btn-primary" onClick$={() => increment(1)}>
          +1
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Counter",
  meta: [
    {
      name: "description",
      content: "Qwik counter with custom hook",
    },
  ],
};
