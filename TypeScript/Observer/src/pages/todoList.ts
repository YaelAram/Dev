import { addStyles, createElement, Link } from "../utils";

import { TodoCounter } from "../components";
import { state, StateType } from "../context";

import { totalObserverHandler } from "../helpers/todoForm";
import { ulObserverHandler } from "../helpers/todoList";

import styles from "../style.css?inline";

export class ToDoList extends HTMLElement {
  private state: StateType;
  private subscribers: string[] = [];

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

    const div = createElement<HTMLDivElement>({ tag: "div" });
    div.append(p, this.ul, Link({ to: "/", text: "TODO-LIST" }));

    shadow.append(div);
  }

  connectedCallback() {
    const totalSubscribe = "total-observer-list";
    const ulSubscribe = "ul-observer-list";

    this.subscribers.push(totalSubscribe, ulSubscribe);

    this.state.subscribe(totalSubscribe, totalObserverHandler(this.span));
    this.state.subscribe(ulSubscribe, ulObserverHandler(this.ul, this.state));
  }

  disconnectedCallback() {
    this.subscribers.forEach((subscriber) =>
      this.state.unsubscribe(subscriber)
    );
  }
}
