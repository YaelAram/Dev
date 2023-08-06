import { StateType } from "../context";
import { createElement } from "../utils";

export const ulObserverHandler = (ul: HTMLUListElement, state: StateType) => {
  return (todos: string[]) => {
    ul.innerHTML = "";
    const todosItems: HTMLElement[] = todos.map((todo) => {
      const span = createElement<HTMLSpanElement>({
        tag: "span",
        innerText: todo,
      });
      const button = createElement<HTMLButtonElement>({
        tag: "button",
        innerText: "Remove",
      });
      const li = createElement<HTMLLIElement>({
        tag: "li",
        nodes: [span, button],
      });

      li.setAttribute(
        "style",
        `view-transition-name: todo-${todo.replaceAll(" ", "-")};`
      );

      const handleClick = () => {
        li.remove();
        state.value = todos.filter((todoToRemove) => todo !== todoToRemove);
      };

      button.addEventListener("click", handleClick);

      return li;
    });

    ul.append(...todosItems);
  };
};
