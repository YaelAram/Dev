import { Observable, Observer, addStyles, createElement, Link } from "../utils";

import { TodoCounter } from "../components";
import { state } from "../context";

import { totalObserverHandler } from "../helpers/todoForm";
import { ulObserverHandler } from "../helpers/todoList";

import styles from "../style.css?inline";

export class ToDoList extends HTMLElement {
  private state: Observable<string[]>;

  private span: HTMLSpanElement;
  private ul: HTMLUListElement;

  constructor() {
    super();
    this.state = state;

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(addStyles(styles));

    const { p, span } = TodoCounter();
    this.span = span;

    this.ul = createElement<HTMLUListElement>({ tag: "ul" });

    shadow.append(p, this.ul, Link({ to: "/", text: "TODO-LIST" }));
  }

  connectedCallback() {
    const totalObserver = new Observer<string[]>(
      totalObserverHandler(this.span)
    );
    const ulObserver = new Observer<string[]>(
      ulObserverHandler(this.ul, this.state)
    );

    this.state.subscribe({
      key: "total-observer-list",
      observer: totalObserver,
    });
    this.state.subscribe({ key: "ul-observer-list", observer: ulObserver });
    this.state.init();
  }

  disconnectedCallback() {
    this.state.unsubscribre("total-observer-list");
    this.state.unsubscribre("ul-observer-list");
  }
}
