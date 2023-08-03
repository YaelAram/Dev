import { createElement } from ".";

export const addStyles = (styles: string) =>
  createElement<HTMLStyleElement>({ tag: "style", textContent: styles });
