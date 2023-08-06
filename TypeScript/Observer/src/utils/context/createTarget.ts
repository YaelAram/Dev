export type Observer<T> = (state: T) => void;

export const createTargetValue = <T>(data: T, storeKey: string) => {
  return {
    value: data,
    observers: new Map<string, Observer<T>>(),
    localStorageKey: storeKey,
    subscribe(key: string, observer: Observer<T>) {
      this.observers.set(key, observer);
      observer(this.value);
    },
    unsubscribe(key: string) {
      this.observers.delete(key);
    },
    notify(newState: T) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(newState));
      this.observers.forEach((observer) => observer(newState));
    },
  };
};

export const createTarget = <T, U>(data: T, storeKey: string, keys: U[]) => {
  return {
    ...data,
    observers: new Map<string, Observer<T>>(),
    localStorageKey: storeKey,
    keys,
    subscribe(key: string, observer: Observer<T>) {
      this.observers.set(key, observer);
      observer(data);
    },
    unsubscribe(key: string) {
      this.observers.delete(key);
    },
    notify(newState: T) {
      localStorage.setItem(this.localStorageKey, JSON.stringify(newState));
      this.observers.forEach((observer) => observer(newState));
    },
  };
};
