import { CounterAction, CounterState } from '../types/counter';

export const initialState: CounterState = {
  counter: 0
};

export const counterReducer = (state: CounterState, { payload = 1, type }: CounterAction) => {
  switch (type) {
    case 'incrementar':
      return { counter: (state.counter + 1) };
    case 'decrementar':
      return { counter: (state.counter - 1) };
    case 'custom':
      return { counter: (state.counter + payload) };
    default:
      return state;
  }
};
