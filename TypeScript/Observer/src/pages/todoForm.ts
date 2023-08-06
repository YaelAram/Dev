import { Link, createElement } from "../utils";

import { state, StateType } from "../context";
import { Form, TodoCounter } from "../components";
import {
  submitHandler,
  totalObserverHandler,
  ulObserverHandler,
} from "../helpers/todoForm";

export class ToDoForm extends HTMLElement {
  private state: StateType;
  private subscribers: string[] = [];

  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private span: HTMLSpanElement;
  private ul: HTMLUListElement;

  private eventHandlers: Map<string, any> = new Map();

  constructor() {
    super();
    this.state = state;

    const shadow = this.attachShadow({ mode: "open" });

    const { form, input } = Form();
    this.form = form;
    this.input = input;

    const { p, span } = TodoCounter();
    this.span = span;

    this.ul = createElement<HTMLUListElement>({ tag: "ul" });

    shadow.append(
      this.form,
      p,
      this.ul,
      Link({ to: "/todos", text: "TODO-LIST" })
    );
  }

  connectedCallback() {
    const totalSubscribe = "total-observer-form";
    const ulSubscribe = "ul-observer-form";

    this.subscribers.push(totalSubscribe, ulSubscribe);

    this.state.subscribe(totalSubscribe, totalObserverHandler(this.span));
    this.state.subscribe(ulSubscribe, ulObserverHandler(this.ul));

    const handler = submitHandler(this.input, this.state);
    this.eventHandlers.set("form", handler);
    this.form.addEventListener("submit", handler);
  }

  disconnectedCallback() {
    this.subscribers.forEach((subscriber) =>
      this.state.unsubscribe(subscriber)
    );
    this.form.removeEventListener("submit", this.eventHandlers.get("form"));
  }
}
