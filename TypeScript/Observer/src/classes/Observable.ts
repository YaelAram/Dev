import { Observer } from "./";

export class Observable<T> {
  private state: T;
  private observers: Observer<T>[];
  private localStorageKey: string;

  constructor(state: T, localStorageKey: string) {
    this.state = state;
    this.observers = [];
    this.localStorageKey = localStorageKey;
  }

  getState(): T {
    return this.state;
  }

  subscribe(observer: Observer<T>) {
    this.observers.push(observer);
  }

  updateState(newState: T) {
    this.state = newState;
    localStorage.setItem(this.localStorageKey, JSON.stringify(newState));
    this.observers.forEach((observer) => observer.notify(this.state));
  }
}
