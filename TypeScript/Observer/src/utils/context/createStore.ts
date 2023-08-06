import { createTarget } from "./createTarget";

export const createStore = <T extends object>(data: T, storeKey: string) => {
  type Keys = keyof typeof data;
  const target = createTarget<T, Keys>(
    data,
    storeKey,
    Object.keys(data) as Keys[]
  );
  return new Proxy(target, {
    set(target, property, value) {
      const success = Reflect.set(target, property, value);
      if (success) {
        const newState: any = {};

        target.keys.forEach((key) => {
          newState[key] = target[key];
        });

        target.notify(newState as T);
      }

      return success;
    },
  });
};
