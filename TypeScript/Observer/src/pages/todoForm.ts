import { Observable, Observer } from "../classes";
import { createElement } from "../helpers";
import { KEY_STORE, TodosType } from "../context/todos";
import styles from "../style.css?inline";
import { Form } from "./Form";

export class ToDoForm extends HTMLElement {
  private state: Observable<string[]>;
  private context: TodosType;

  private form: HTMLFormElement;
  private p: HTMLParagraphElement;
  private ul: HTMLUListElement;
  private link: HTMLDivElement;

  constructor() {
    super();
    this.state = new Observable<string[]>([], KEY_STORE);

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(
      createElement<HTMLStyleElement>({ tag: "style", textContent: styles })
    );

    this.form = createElement<HTMLFormElement>({ tag: "form" });
    this.p = createElement<HTMLParagraphElement>({
      tag: "p",
      innerText: "Total: ",
    });
    this.ul = createElement<HTMLUListElement>({ tag: "ul" });
    this.link = createElement<HTMLDivElement>({
      tag: "div",
      innerHTML: "<link-nav to='/todos' text='TODO-LIST'></link-nav>",
    });

    shadow.append(this.form, this.p, this.ul, this.link.firstChild ?? "");
  }

  public setState(context: TodosType): void {
    this.context = context;
    this.state.updateState(context.getValue());
  }

  connectedCallback() {
    const { input } = Form(this.form);

    const span = createElement<HTMLSpanElement>({ tag: "span" });
    this.p.append(span);

    const totalObserver = new Observer<string[]>((todos) => {
      span.innerText = String(todos.length);
    });

    const ulObserver = new Observer<string[]>((todos) => {
      const todosItems = todos.map((todo) => `<li>${todo}</li>`).join("");
      this.ul.innerHTML = todosItems;
    });

    this.state.subscribe(totalObserver);
    this.state.subscribe(ulObserver);

    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.state.updateState([...this.state.getState(), input.value]);
      input.value = "";
    });
  }

  disconnectedCallback() {
    this.context.setState(this.state.getState());
  }
}
