import { StateType } from "../context";

export const submitHandler = (input: HTMLInputElement, state: StateType) => {
  return (evt: SubmitEvent) => {
    evt.preventDefault();

    const newTodo = input.value.trim();
    if (newTodo) {
      state.value = [...state.value, input.value];
      input.value = "";
    }
  };
};

export const totalObserverHandler = (span: HTMLSpanElement) => {
  return (todos: string[]) => {
    span.innerText = String(todos.length);
  };
};

export const ulObserverHandler = (ul: HTMLUListElement) => {
  return (todos: string[]) => {
    const todosItems = todos
      .map(
        (todo) =>
          `<li style="view-transition-name: todo-${todo.replaceAll(
            " ",
            "-"
          )};">${todo}</li>`
      )
      .join("");
    ul.innerHTML = todosItems;
  };
};
