import { ToDoForm, ToDoList } from "./pages";
import { LinkElement, Route, createRouter } from "./utils";

import "./main.css";

customElements.define("todo-form", ToDoForm);
customElements.define("todo-list", ToDoList);
customElements.define("link-nav", LinkElement);
const app = document.querySelector<HTMLDivElement>("#app")!;

const routes: Route[] = [
  {
    path: "/",
    selector: "todo-form",
    title: "ToDo Form",
  },
  {
    path: "/todos",
    selector: "todo-list",
    title: "ToDo List",
  },
];

createRouter(routes, app);
