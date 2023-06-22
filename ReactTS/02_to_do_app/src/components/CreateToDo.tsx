import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';

export default function CreateToDo() {
  const [toDoDesc, setToDoDesc] = useState<string>('');
  const { addToDo } = useContext(ToDoContext);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setToDoDesc(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!toDoDesc) return;

    addToDo({
      id: toDoDesc,
      desc: toDoDesc,
      completed: false
    });

    setToDoDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={toDoDesc} />
      <button type="submit">Add</button>
    </form>
  );
};
