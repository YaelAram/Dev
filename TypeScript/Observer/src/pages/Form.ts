import { createElement } from "../helpers";

export const Form = (form: HTMLFormElement) => {
  const INPUT_ID: string = "title";

  const label = createElement<HTMLLabelElement>({
    tag: "label",
    innerText: "Title:",
    options: { for: INPUT_ID },
  });

  const input = createElement<HTMLInputElement>({
    tag: "input",
    options: { id: INPUT_ID, type: "text", placeholder: "Walk the dog" },
  });

  const button = createElement<HTMLButtonElement>({
    tag: "button",
    innerText: "Add",
    options: { type: "submit" },
  });

  form.append(label, input, button);

  return { label, input, button };
};
