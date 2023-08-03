import { Observable } from "../utils";

export const submitHandler = (
  input: HTMLInputElement,
  state: Observable<string[]>
) => {
  return (evt: SubmitEvent) => {
    evt.preventDefault();

    const newTodo = input.value.trim();
    if (newTodo) {
      state.updateState([...state.getState(), input.value]);
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
    const todosItems = todos.map((todo) => `<li>${todo}</li>`).join("");
    ul.innerHTML = todosItems;
  };
};
