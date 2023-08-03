import { createElement } from "../utils";

export const Form = () => {
  const INPUT_ID: string = "title";

  const form = createElement<HTMLFormElement>({ tag: "form" });

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

  return { form, label, input, button };
};
