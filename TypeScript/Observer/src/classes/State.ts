export const getInstance = <T>(initial: T) => {
  let state: T = initial;

  return {
    getValue: (): T => state,
    setState: (newState: T) => {
      state = newState;
    },
  };
};
