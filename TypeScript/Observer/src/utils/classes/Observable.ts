import { Observer } from "./";

export class Observable<T> {
  private state: T;
  private localStorageKey: string;
  private observers: Map<string, Observer<T>>;

  constructor(state: T, localStorageKey: string) {
    this.state = state;
    this.observers = new Map<string, Observer<T>>();
    this.localStorageKey = localStorageKey;
  }

  getState(): T {
    return this.state;
  }

  getSubscribers() {
    return this.observers;
  }

  subscribe({ key, observer }: { key: string; observer: Observer<T> }) {
    this.observers.set(key, observer);
  }

  unsubscribre(key: string) {
    this.observers.delete(key);
  }

  init() {
    this.observers.forEach((observer) => observer.notify(this.state));
  }

  updateState(newState: T) {
    this.state = newState;
    localStorage.setItem(this.localStorageKey, JSON.stringify(newState));
    this.observers.forEach((observer) => observer.notify(this.state));
  }
}
