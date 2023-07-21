import { $, useComputed$, useSignal } from "@builder.io/qwik";

export interface options {
  minValue?: number;
  maxValue?: number;
}

export const useCounter = (
  initialValue: number = 0,
  { minValue = 0, maxValue = Number.MAX_SAFE_INTEGER }: options
) => {
  const counter = useSignal<number>(initialValue);

  const decrement = $((step: number = 1) => {
    if (counter.value - step < minValue) return;
    counter.value = counter.value - step;
  });

  const increment = $((step: number = 1) => {
    if (counter.value + step > maxValue) return;
    counter.value = counter.value + step;
  });

  return {
    counter: useComputed$(() => counter.value),
    decrement,
    increment,
  };
};
