export type Observer<T> = (state: T) => Promise<void>;

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
    observer(this.state);
  }

  unsubscribre(key: string) {
    this.observers.delete(key);
  }

  updateState(newState: T) {
    this.state = newState;
    localStorage.setItem(this.localStorageKey, JSON.stringify(newState));
    const tasks = Array.from(this.observers.values()).map((observer) => {
      return new Promise<void>(() => {
        observer(newState);
      });
    });
    Promise.all(tasks);
  }
}
