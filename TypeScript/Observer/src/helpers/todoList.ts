import { Observable, createElement } from "../utils";

export const ulObserverHandler = (
  ul: HTMLUListElement,
  state: Observable<string[]>
) => {
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

      const handleClick = () => {
        li.remove();
        state.updateState(
          todos.filter((todoToRemove) => todo !== todoToRemove)
        );
      };

      button.addEventListener("click", handleClick);

      return li;
    });

    ul.append(...todosItems);
  };
};
