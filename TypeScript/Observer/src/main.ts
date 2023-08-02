import { Link } from "./components/Link";
import { ToDoForm, ToDoList } from "./pages";
import { todosContext, TodosType } from "./context/todos";
import { createRouter } from "./helpers";

customElements.define("todo-form", ToDoForm);
customElements.define("todo-list", ToDoList);
customElements.define("link-nav", Link);
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
