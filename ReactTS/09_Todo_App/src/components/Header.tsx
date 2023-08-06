import { CreateTodo } from "./CreateTodo";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>
        To Do App
        <img
          style={{ width: "60px", height: "auto" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
        />
      </h1>
      <CreateTodo />
    </header>
  );
};
