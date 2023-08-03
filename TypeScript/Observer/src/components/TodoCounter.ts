import { createElement } from "../utils";

export const TodoCounter = () => {
  const span = createElement<HTMLSpanElement>({ tag: "span" });

  const p = createElement<HTMLParagraphElement>({
    tag: "p",
    innerText: "Total: ",
    nodes: [span],
  });

  return {
    p,
    span,
  };
};
