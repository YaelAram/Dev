import CreateToDo from "./components/CreateToDo";
import { ToDoList } from "./components/ToDoList";

export function App() {
  return (
    <>
      <h1>To Do App</h1>
      <CreateToDo />
      <ToDoList />
    </>
  )
}
