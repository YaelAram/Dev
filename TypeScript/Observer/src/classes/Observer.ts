export class Observer<T> {
  public notify: (state: T) => void;

  constructor(notify: (state: T) => void) {
    this.notify = notify;
  }
}
