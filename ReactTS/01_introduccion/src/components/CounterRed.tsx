import { useReducer } from "react";

import { counterReducer, initialState } from '../reducers/counter';

const payload = -5;

export function CounterRed() {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h2>Contador: {counterState.counter}</h2>
      <button className="btn btn-outline-primary" onClick={() => dispatch({ type: 'incrementar' })}>+1</button>
      <button className="btn btn-outline-primary ms-2" onClick={() => dispatch({ type: 'decrementar' })}>-1</button>
      <button className="btn btn-outline-primary ms-2" onClick={() => dispatch({ type: 'custom', payload })}>
        {`${(payload > 0) ? '+' : ''}${payload}`}
      </button>
    </>
  )
}
