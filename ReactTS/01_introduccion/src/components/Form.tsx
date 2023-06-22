import { useForm } from "../hooks/useForm";
import { FormType } from "../interfaces/FormType";

export function Form() {
  const { email, password, form, handleChange } = useForm<FormType>({
    email: '',
    password: ''
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" className="form-control" name="email" onChange={handleChange} value={email} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input type="password" className="form-control" name="password" onChange={handleChange} value={password} />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}
