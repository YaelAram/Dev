import { Observable, Observer, addStyles, createElement, Link } from "../utils";

import { TodoCounter } from "../components";
import { KEY_STORE, TodosType } from "../context";

import { totalObserverHandler } from "../helpers/todoForm";
import { ulObserverHandler } from "../helpers/todoList";

import styles from "../style.css?inline";

export class ToDoList extends HTMLElement {
  private state: Observable<string[]>;
  private context: TodosType;

  private span: HTMLSpanElement;
  private ul: HTMLUListElement;

  constructor() {
    super();
    this.state = new Observable<string[]>([], KEY_STORE);

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(addStyles(styles));

    const { p, span } = TodoCounter();
    this.span = span;

    this.ul = createElement<HTMLUListElement>({ tag: "ul" });

    shadow.append(p, this.ul, Link({ to: "/", text: "TODO-LIST" }));
  }

  public setState(context: TodosType): void {
    this.context = context;
    this.state.updateState(context.getValue());
  }

  connectedCallback() {
    const totalObserver = new Observer<string[]>(
      totalObserverHandler(this.span)
    );
    const ulObserver = new Observer<string[]>(
      ulObserverHandler(this.ul, this.state)
    );

    this.state.subscribe(totalObserver, ulObserver);
  }

  disconnectedCallback() {
    this.context.setState(this.state.getState());
  }
}
