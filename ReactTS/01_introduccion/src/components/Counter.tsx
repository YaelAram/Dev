import { useState } from "react"

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleAdd = (step: number = 1): void => {
    setCounter(counter + step);
  };

  return (
    <>
      <span>Valor: {counter}</span>
      <br />
      <button type="button" className="btn btn-outline-primary mt-2" onClick={() => handleAdd()}>+1</button>
      <button type="button" className="btn btn-outline-primary ms-3 mt-2" onClick={() => handleAdd(2)}>+2</button>
      <button type="button" className="btn btn-outline-danger ms-3 mt-2" onClick={() => setCounter(0)}>Reset</button>
    </>
  )
}
