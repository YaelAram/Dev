import { createElement, navigate } from "../helpers";

export class LinkElement extends HTMLElement {
  private a: HTMLAnchorElement;
  private handleClick: (evt: MouseEvent) => void;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    this.a = createElement<HTMLAnchorElement>({ tag: "a" });

    shadow.append(this.a);
  }

  private createHandleClick(to: string, target: string) {
    const handleClick = (evt: MouseEvent) => {
      const isMainEvent = evt.button === 0;
      const isModified =
        evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey;
      const isManageableEvent = target === undefined || target === "_self";

      if (isMainEvent && isManageableEvent && !isModified) {
        evt.preventDefault();
        navigate(to);
      }
    };

    this.handleClick = handleClick;

    return handleClick;
  }

  connectedCallback() {
    const to = this.getAttribute("to") ?? "/";
    const target = this.getAttribute("target") ?? "_self";
    const text = this.getAttribute("text") ?? "Go";

    this.a.innerText = text;
    this.a.setAttribute("href", to);
    this.a.setAttribute("target", target);

    this.createHandleClick(to, target);

    this.a.addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
    this.a.removeEventListener("click", this.handleClick);
  }
}

interface params {
  to: string;
  text: string;
  target?: string;
}

export const Link = ({ to, text, target = "_self" }: params) => {
  const div = createElement<HTMLDivElement>({
    tag: "div",
    innerHTML: `<link-nav to='${to}' text='${text}' target='${target}'></link-nav>`,
  });

  return div.firstChild!;
};
