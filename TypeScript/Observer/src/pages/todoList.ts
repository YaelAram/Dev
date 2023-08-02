import { Observable, Observer } from "../classes";
import { KEY_STORE, TodosType } from "../context/todos";
import { createElement } from "../helpers";
import styles from "../style.css?inline";

export class ToDoList extends HTMLElement {
  private state: Observable<string[]>;
  private context: TodosType;

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

    this.p = createElement<HTMLParagraphElement>({
      tag: "p",
      innerText: "Total: ",
    });
    this.ul = createElement<HTMLUListElement>({ tag: "ul" });
    this.link = createElement<HTMLDivElement>({
      tag: "div",
      innerHTML: "<link-nav to='/' text='TODO-LIST'></link-nav>",
    });

    shadow.append(this.p, this.ul, this.link.firstChild ?? "");
  }

  public setState(context: TodosType): void {
    this.context = context;
    this.state.updateState(context.getValue());
  }

  connectedCallback() {
    const span = createElement<HTMLSpanElement>({ tag: "span" });
    this.p.append(span);

    const totalObserver = new Observer<string[]>((todos) => {
      span.innerText = String(todos.length);
    });

    const ulObserver = new Observer<string[]>((todos) => {
      this.ul.innerHTML = "";
      const todosItems: HTMLElement[] = todos.map((todo) => {
        const li = createElement<HTMLLIElement>({ tag: "li" });
        const span = createElement<HTMLSpanElement>({
          tag: "span",
          innerText: todo,
        });
        const button = createElement<HTMLButtonElement>({
          tag: "button",
          innerText: "Remove",
        });

        const handleClick = () => {
          li.remove();
          this.state.updateState(
            todos.filter((todoToRemove) => todo !== todoToRemove)
          );
        };

        button.addEventListener("click", handleClick);

        li.append(span, button);
        return li;
      });
      this.ul.append(...todosItems);
    });

    this.state.subscribe(totalObserver);
    this.state.subscribe(ulObserver);
  }

  disconnectedCallback() {
    this.context.setState(this.state.getState());
  }
}
