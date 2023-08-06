import { useContext, useState } from "react";

import { TodosState } from "../interfaces";
import { TodosContext } from "../context";

export const useCreateTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useContext<TodosState>(TodosContext);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newTodo = inputValue.trim();

    if (newTodo) {
      addTodo(newTodo);
      setInputValue("");
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = evt.target.value;
    setInputValue(newValue);
  };

  return {
    inputValue,
    handleChange,
    handleSubmit,
  };
};
