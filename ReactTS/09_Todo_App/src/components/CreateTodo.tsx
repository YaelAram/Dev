import { useCreateTodo } from "../hooks";

export const CreateTodo: React.FC = () => {
  const { inputValue, handleChange, handleSubmit } = useCreateTodo();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        value={inputValue}
        placeholder="Walk the dog"
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
};
