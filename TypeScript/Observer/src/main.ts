import { LinkElement, createRouter } from "./utils";
import { ToDoForm, ToDoList } from "./pages";

import { todosContext, TodosType } from "./context";

customElements.define("todo-form", ToDoForm);
customElements.define("todo-list", ToDoList);
customElements.define("link-nav", LinkElement);
const app = document.querySelector<HTMLDivElement>("#app")!;

const routes = [
  {
    path: "/",
    selector: "todo-form",
  },
  {
    path: "/todos",
    selector: "todo-list",
  },
];

createRouter<TodosType>(routes, app, todosContext);
