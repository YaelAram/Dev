interface params {
  tag: string;
  options?: any;
  innerText?: string;
  innerHTML?: string;
  textContent?: string;
  nodes?: Node[];
  style?: string[];
}

export const createElement = <T>({
  tag,
  innerHTML = "",
  innerText = "",
  options = {},
  textContent = "",
  nodes = [],
  style = [],
}: params): T => {
  const element = document.createElement(tag);

  for (const attribute in options) {
    const value: string = options[`${attribute}`];
    element.setAttribute(attribute, value);
  }

  if (innerHTML) element.innerHTML = innerHTML;
  if (innerText) element.innerText = innerText;
  if (textContent) element.textContent = textContent;
  if (nodes.length) element.append(...nodes);
  if (style.length) element.classList.add(...style);

  return element as T;
};
