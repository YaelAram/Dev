import { createTargetValue } from "./createTarget";

export const createValue = <T>(data: T, storeKey: string) => {
  const target = createTargetValue(data, storeKey);
  return new Proxy(target, {
    set(target, property, value) {
      const success = Reflect.set(target, property, value);
      if (success) target.notify(value);

      return success;
    },
  });
};
