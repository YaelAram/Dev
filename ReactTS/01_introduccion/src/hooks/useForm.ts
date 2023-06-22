import { useState, ChangeEvent } from 'react';

export const useForm = <T>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return {
    ...form,
    form,
    handleChange
  };
};
