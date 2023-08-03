import { Link, Observable, Observer, addStyles, createElement } from "../utils";

import { KEY_STORE, TodosType } from "../context";
import { Form, TodoCounter } from "../components";
import {
  submitHandler,
  totalObserverHandler,
  ulObserverHandler,
} from "../helpers/todoForm";

import styles from "../style.css?inline";

export class ToDoForm extends HTMLElement {
  private state: Observable<string[]>;
  private context: TodosType;

  private form: HTMLFormElement;
  private input: HTMLInputElement;
  private span: HTMLSpanElement;
  private ul: HTMLUListElement;

  private eventHandlers: Map<string, any> = new Map();

  constructor() {
    super();
    this.state = new Observable<string[]>([], KEY_STORE);

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(addStyles(styles));

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

  public setState(context: TodosType): void {
    this.context = context;
    this.state.updateState(context.getValue());
  }

  connectedCallback() {
    const totalObserver = new Observer<string[]>(
      totalObserverHandler(this.span)
    );
    const ulObserver = new Observer<string[]>(ulObserverHandler(this.ul));

    this.state.subscribe(totalObserver, ulObserver);

    const handler = submitHandler(this.input, this.state);
    this.eventHandlers.set("form", handler);
    this.form.addEventListener("submit", handler);
  }

  disconnectedCallback() {
    this.state.unsubscribreAll();
    this.context.setState(this.state.getState());
    this.form.removeEventListener("submit", this.eventHandlers.get("form"));
  }
}
